const ADD_POST = 'ADD_POST';
let maxIdPosts = 2;

let initialState = {
    userPosts: [
        {id: 1, userName: "Andrey Lavrusenko", text: "Учу react в 10 раз"}
    ]
}

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {

        const newPost = {
            id: maxIdPosts++,
            userName: "Andrey Lavrusenko",
            text: action.postMessage
        }

        state.userPosts.push(newPost);
    }

    return state;
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    }
}



export default profileReducer;