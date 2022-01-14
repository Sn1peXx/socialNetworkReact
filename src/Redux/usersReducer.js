import {userAPI} from "../API/api";
import {updateObjectInArray} from "../utilits/objectHelpers";

const FOLLOW = 'user/FOLLOW';
const UNFOLLOW = 'user/UNFOLLOW';
const SET_USERS = 'user/SET_USERS';
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'user/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", {followed: false})
            }

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const followAccount = (id) => ({type: FOLLOW, id: id});
export const unfollowAccount = (id) => ({type: UNFOLLOW, id: id});
export const setUsersAction = (users) => ({type: SET_USERS, users});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export const getUsers = () => async dispatch => {
    dispatch(setIsFetching(true));

    let data = await userAPI.getUsers(initialState.currentPage++);

    dispatch(setIsFetching(false));
    dispatch(setUsersAction(data.items));
    window.scrollTo(0, 0);
}


const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id));

    let res = await apiMethod(id);

    if (res.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }

    dispatch(toggleFollowingProgress(false, id));
}

export const follow = (id) => async dispatch => {
    let apiMethod = userAPI.follow.bind(userAPI);

    followUnfollowFlow(dispatch, id, apiMethod, followAccount);
}

export const unfollow = id => async dispatch => {
    let apiMethod = userAPI.unfollow.bind(userAPI);

    followUnfollowFlow(dispatch, id, apiMethod, unfollowAccount);
}

export default usersReducer;