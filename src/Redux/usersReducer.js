import {userAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


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
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: true}
                    }
                    return item;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: false}
                    }
                    return item;
                })
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


export const getUsers = () => {
    return dispatch => {
        dispatch(setIsFetching(true));

        userAPI.getUsers(initialState.currentPage++)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsersAction(data.items));
                window.scrollTo(0, 0);
            });
    }
}

export const follow = (id) => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, id));

        userAPI.follow(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAccount(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            })
    }
}

export const unfollow = id => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, id));

        userAPI.unfollow(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowAccount(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            })
    }
}

export default usersReducer;