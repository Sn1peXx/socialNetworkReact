// @ts-ignore
import {profileAPI} from "../API/api.ts";
import {Dispatch} from "redux";

const ADD_POST = 'profile/ADD_POST';
const SET_POSTS = 'profile/SET_POSTS';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA';


let maxIdPosts = 2;

type contactsType = {
    github: string,
    vk: string
}

type photoType = {
    small: string | null,
    large: string | null
}


export type PostType = {
    id: number,
    userName: string,
    text: string
}

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    aboutMe: string,
    contacts: contactsType,
    photos: photoType
}

let initialState = {
    userPosts: [
        {id: 1, userName: "Andrey Lavrusenko", text: "Учу react"}
    ] as PostType[],
    profile: null as ProfileType[],
    status: '',
    userId: null,
}

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: maxIdPosts++,
                userName: "Andrey Lavrusenko",
                text: action.postMessage
            }

            return {
                ...state,
                userPosts: [...state.userPosts, newPost]
            }

        case SET_POSTS:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}

        case SET_PROFILE_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

type ActionType = addPostActionType | setUserProfileActionType | setStatusProfileActionType | savePhotoSuccessActionType | setProfileActionType;

type addPostActionType = {
    type: typeof ADD_POST,
    postMessage: string
}
export const addPostActionCreator = (text: string): addPostActionType => ({type: ADD_POST, postMessage: text});

type setUserProfileActionType = {
    type: typeof SET_POSTS,
    profile: string
}

export const setUserProfile = (profile: string): setUserProfileActionType => ({type: SET_POSTS, profile});

type setStatusProfileActionType = {
    type: typeof SET_STATUS,
    status: string
}

export const setStatusProfile = (status: string): setStatusProfileActionType => ({type: SET_STATUS, status});

type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: string
}

export const savePhotoSuccess = (photos: string): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

type setProfileActionType = {
    type: typeof SET_PROFILE_DATA,
    data: object
}

export const setProfileData = (userId: number, aboutMe: string, fullName: string, lookingForAJob: string, lookingForAJobDescription: string): setProfileActionType => (
    {type: SET_PROFILE_DATA, data: {userId, aboutMe, fullName, lookingForAJob, lookingForAJobDescription}}
);


export const getUserProfile = (id: number) => async (dispatch: Dispatch<ActionType>) => {
    let res = await profileAPI.getProfile(id);

    dispatch(setUserProfile(res));
    window.scrollTo(0, 0);
}

export const getUserStatus = (id: number) => async (dispatch: Dispatch<ActionType>) => {
    let res = await profileAPI.getStatus(id);

    dispatch(setStatusProfile(res.data));
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch<ActionType>) => {
    let res = await profileAPI.updateStatus(status);

    if (res.data.resultCode === 0) {
        dispatch(setStatusProfile(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch<ActionType>) => {
    let res = await profileAPI.savePhoto(file);

    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos));
    }
}

export const setProfileUserData = (aboutMe: string, fullName: string, lookingForAJobDescription: string) => async (dispatch: Dispatch<ActionType>) => {
    // @ts-ignore
    const userId = window.store.getState().auth.userId;

    let res = await profileAPI.setUserData(userId, aboutMe, fullName, lookingForAJobDescription);

    if (res.data.resultCode === 0) {
        dispatch(setProfileData(userId, aboutMe, fullName,null, lookingForAJobDescription));
    }
}



export default profileReducer;