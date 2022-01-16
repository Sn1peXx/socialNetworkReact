import {profileAPI} from "../API/api";

const ADD_POST = 'profile/ADD_POST';
const SET_POSTS = 'profile/SET_POSTS';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA';


let maxIdPosts = 2;

let initialState = {
    userPosts: [
        {id: 1, userName: "Andrey Lavrusenko", text: "Учу react в 10 раз"}
    ],
    profile: null,
    status: '',
    userId: null,
}

const profileReducer = (state = initialState, action) => {

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

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text})
export const setUserProfile = (profile) => ({type: SET_POSTS, profile})
export const setStatusProfile = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setProfileData = (userId, aboutMe, fullName, lookingForAJob, lookingForAJobDescription) => ({type: SET_PROFILE_DATA, data: {userId, aboutMe, fullName, lookingForAJob, lookingForAJobDescription}});


export const getUserProfile = id => async (dispatch) => {
    let res = await profileAPI.getProfile(id);

    dispatch(setUserProfile(res));
    window.scrollTo(0, 0);
}

export const getUserStatus = id => async dispatch => {
    let res = await profileAPI.getStatus(id);

    dispatch(setStatusProfile(res.data));
}

export const updateUserStatus = status => async dispatch => {
    let res = await profileAPI.updateStatus(status);

    if (res.data.resultCode === 0) {
        dispatch(setStatusProfile(status));
    }
}

export const savePhoto = file => async dispatch => {
    let res = await profileAPI.savePhoto(file);

    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos));
    }
}

export const setProfileUserData = (aboutMe, fullName, lookingForAJobDescription) => async dispatch => {
    const userId = window.store.getState().auth.userId;

    let res = await profileAPI.setUserData(userId, aboutMe, fullName, lookingForAJobDescription);

    if (res.data.resultCode === 0) {
        dispatch(setProfileData(userId, aboutMe, fullName, lookingForAJobDescription));
    }
}



export default profileReducer;