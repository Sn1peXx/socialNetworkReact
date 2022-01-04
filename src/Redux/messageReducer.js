// const UPDATE_ACTIVE_DIALOG = 'UPDATE-ACTIVE-DIALOG';
const SEND_MESSAGE = 'SEND_MESSAGE';
let maxIdMessage = 3;

const initialState = {
    messageUserData: [
        {id: 1, userName: 'Maxim', active: false},
        {id: 2, userName: 'Diana', active: false},
        {id: 3, userName: "Oleg", active: false}
    ],

    messageUserChat: [
        {id: 1, sendBy: 'Maxim', text: 'Hi'},
        {id: 2, sendBy: "Andrey", text: 'Hello'}
    ]
};

const messageReducer = (state = initialState, action) => {

    switch (action.type) {

        // case UPDATE_ACTIVE_DIALOG:
            // state.messagesPage.messageUserData = state.messagesPage.messageUserData.map(item => {
            //     item.active = false;
            //     if (item.id === action.id) {
            //         return {...item, active: !item.active}
            //     }
            //     return item;
            // });
            // return state;

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

export default messageReducer;