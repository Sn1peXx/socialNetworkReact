// @ts-ignore
import {userAPI} from "../API/api.ts";
import {updateObjectInArray} from "../utilits/objectHelpers";
import {Dispatch} from "redux";

const FOLLOW = 'user/FOLLOW';
const UNFOLLOW = 'user/UNFOLLOW';
const SET_USERS = 'user/SET_USERS';
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'user/TOGGLE_IS_FOLLOWING_PROGRESS';

type photoType = {
    small: string | null,
    large: string | null
}

export type userType = {
    id: number,
    name: string,
    status: string,
    photos: photoType,
    followed: boolean
}


let initialState = {
    users: [] as userType[],
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): initialStateType => {

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

type ActionsType = followAccountType | unfollowAccountType | setUserActionType | setIsFetchingType | toggleFollowingProgressType;


type followAccountType = {
    type: typeof FOLLOW,
    id: number
}

export const followAccount = (id: number): followAccountType => ({type: FOLLOW, id: id});

type unfollowAccountType = {
    type: typeof UNFOLLOW,
    id: number
}

export const unfollowAccount = (id: number): unfollowAccountType => ({type: UNFOLLOW, id: id});

type setUserActionType = {
    type: typeof SET_USERS,
    users: any
}

export const setUsersAction = (users: any): setUserActionType => ({type: SET_USERS, users});

type setIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export const setIsFetching = (isFetching: boolean): setIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});

type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});
 

export const getUsers = () => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setIsFetching(true));

    let data = await userAPI.getUsers(initialState.currentPage++);

    dispatch(setIsFetching(false));
    dispatch(setUsersAction(data.items));
    window.scrollTo(0, 0);
}
 

const followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, id));

    let res = await apiMethod(id);

    if (res.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }

    dispatch(toggleFollowingProgress(false, id));
}

export const follow = (id: number) => async (dispatch: Dispatch<ActionsType>) => {
    let apiMethod = userAPI.follow.bind(userAPI);

    await followUnfollowFlow(dispatch, id, apiMethod, followAccount);
}

export const unfollow = (id: number) => async (dispatch: Dispatch<ActionsType>) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);

    await followUnfollowFlow(dispatch, id, apiMethod, unfollowAccount);
}

export default usersReducer;