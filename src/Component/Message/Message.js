import {NavLink} from "react-router-dom";

import './Message.css';
import ChatContainer from "./Chat/ChatContainer";


const Message = (props) => {

    let state = props.messagesPage;

    const content = state.messageUserData.map(item => {

        return (
            <MessagePerson key={item.id} {...item}  />
        )
    });

    return (
        <>
            <div className="message">
                <h1 className="message_title">Мои чаты</h1>
                <div className="message_dialogs">
                    {content}
                </div>
            </div>
            <ChatContainer messageUserChat={state.messageUserChat} sendMessageCreator={props.sendMessageCreator} />
        </>
    );
}


const MessagePerson = ({id, userName}) => {

    return (
        <NavLink to={`/message/${id}`} key={id}  className='message_person'>{userName}</NavLink>
    )
}

export default Message;