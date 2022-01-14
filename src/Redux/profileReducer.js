import {profileAPI} from "../API/api";

const ADD_POST = 'profile/ADD_POST';
const SET_POSTS = 'profile/SET_POSTS';
const SET_STATUS = 'profile/SET_STATUS';

let maxIdPosts = 2;

let initialState = {
    userPosts: [
        {id: 1, userName: "Andrey Lavrusenko", text: "Учу react в 10 раз"}
    ],
    profile: null,
    status: ''
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

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text})
export const setUserProfile = (profile) => ({type: SET_POSTS, profile})
export const setStatusProfile = (status) => ({type: SET_STATUS, status});


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

export default profileReducer;