import Chat from "./Chat";

import '../Message.module.css'

const ChatContainer = (props) => {

    return (
        <Chat messageUserChat={props.messageUserChat} sendMessageCreator={props.sendMessageCreator} />
    )
}

export default ChatContainer;