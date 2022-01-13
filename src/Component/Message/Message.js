import {NavLink} from "react-router-dom";

import ChatContainer from "./Chat/ChatContainer";

import messageStyle from './Message.module.css';

const Message = (props) => {

    const content = props.messageUserData.map(item => {

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
            <ChatContainer messageUserChat={props.messageUserChat} sendMessageCreator={props.sendMessageCreator} />
        </>
    );
}


const MessagePerson = ({id, userName}) => {

    return (
        <NavLink to={`/message/${id}`} key={id}  className={messageStyle.message_person}>{userName}</NavLink>
    )
}

export default Message;