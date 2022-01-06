const SEND_MESSAGE = 'SEND_MESSAGE';

let maxIdMessage = 3;

const initialState = {
    messageUserData: [
        {id: 1, userName: 'Maxim'},
        {id: 2, userName: 'Diana'},
        {id: 3, userName: "Oleg"}
    ],

    messageUserChat: [
        {id: 1, sendBy: 'Maxim', text: 'Hi'},
        {id: 2, sendBy: "Andrey", text: 'Hello'}
    ]
};

const messageReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:

            const newMessage = {
                id: maxIdMessage++,
                sendBy: 'Maxim',
                text: action.text
            }

            state.messageUserChat.push(newMessage);
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}

export default messageReducer;