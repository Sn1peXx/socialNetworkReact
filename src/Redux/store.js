const ADD_POST = 'ADD_POST';
const UPDATE_ACTIVE_DIALOG = 'UPDATE-ACTIVE-DIALOG';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    }
}

export const updatePostActionCreator = (item) => {
    return {
        type: UPDATE_ACTIVE_DIALOG,
        id: item.id
    }
}

export const sendMessageCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}
