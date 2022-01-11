import {userAPI} from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_POSTS = 'SET_POSTS';

let maxIdPosts = 2;

let initialState = {
    userPosts: [
        {id: 1, userName: "Andrey Lavrusenko", text: "Учу react в 10 раз"}
    ],
    profile: null
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

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text})
export const setUserProfile = (profile) => ({type: SET_POSTS, profile})

export const getUserProfile = id => (dispatch) => {
    userAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
            window.scrollTo(0, 0);
        })
}

export default profileReducer;