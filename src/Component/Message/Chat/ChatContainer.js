import Chat from "./Chat";

import '../Message.module.css'

const ChatContainer = (props) => {

    const onSendMessageClick = (text) => {
        props.sendMessageCreator(text);
    }

    return (
        <Chat messageUserChat={props.messageUserChat} sendMessageCreator={onSendMessageClick} />
    )
}

export default ChatContainer;