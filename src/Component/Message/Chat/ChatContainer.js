import {sendMessageCreator} from "../../../Redux/store";

import Chat from "./Chat";

import '../Message.css'

const ChatContainer = ({messageUserChat, dispatch}) => {

    const onSendMessageClick = (text) => {
        dispatch(sendMessageCreator(text));
    }

    return (
        <Chat messageUserChat={messageUserChat} sendMessageCreator={onSendMessageClick} />
    )
}

export default ChatContainer;