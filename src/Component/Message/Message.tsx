import {FC} from "react";
import {NavLink} from "react-router-dom";

// @ts-ignore
import ChatContainer from "./Chat/ChatContainer.tsx";
// @ts-ignore
import messageStyle from './Message.module.css';
import {messageChatType, messageType} from "../../Redux/messageReducer";


type PropsType = {
    messageUserData: messageType[],
    messageUserChat: messageChatType[],
    sendMessageCreator: (str: string) => void
}

const Message: FC<PropsType> = ({messageUserData, messageUserChat, sendMessageCreator}) => {

    const content = messageUserData.map(item => {

        return (
            <MessagePerson key={item.id} {...item}  />
        )
    });

    return (
        <>
            <div className={messageStyle.message}>
                <h1 className={messageStyle.message_title}>Мои чаты</h1>
                <div className={messageStyle.message_dialogs}>
                    {content}
                </div>
            </div>
            <ChatContainer messageUserChat={messageUserChat} sendMessageCreator={sendMessageCreator} />
        </>
    );
}


const MessagePerson = ({id, userName}) => {

    return (
        <NavLink to={`/message/${id}`} key={id}  className={messageStyle.message_person}>{userName}</NavLink>
    )
}

export default Message;