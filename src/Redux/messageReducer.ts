const SEND_MESSAGE = 'message/SEND_MESSAGE';

let maxIdMessage = 3;

type messageType = {
    id: number,
    userName: string
}

type messageChatType = {
    id: number,
    sendBy: string,
    text: string
}

const initialState = {
    messageUserData: [
        {id: 1, userName: 'Maxim'},
        {id: 2, userName: 'Diana'},
        {id: 3, userName: "Oleg"}
    ] as messageType[],

    messageUserChat: [
        {id: 1, sendBy: 'Maxim', text: 'Hi'},
        {id: 2, sendBy: "Andrey", text: 'Hello'}
    ] as messageChatType[]
};

type initialStateType = {
    messageUserData: object[],
    messageUserChat: object[]
}

const messageReducer = (state = initialState, action : sendMessageCreatorActionType): initialStateType => {

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

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    text: string
}

export const sendMessageCreator = (text: string): sendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}

export default messageReducer;