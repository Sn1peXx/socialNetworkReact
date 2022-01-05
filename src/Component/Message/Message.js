import {NavLink} from "react-router-dom";
import {updatePostActionCreator} from "../../Redux/messageReducer";

import './Message.css';
import ChatContainer from "./Chat/ChatContainer";


const Message = ({messageUserData, messageUserChat, dispatch}) => {

    const content = messageUserData.map(item => {
        return (
            <MessagePerson key={item.id} {...item} onActiveChat={() => dispatch(updatePostActionCreator(item))} />
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
            <ChatContainer messageUserChat={messageUserChat} dispatch={dispatch}/>
        </>
    );
}


const MessagePerson = ({id, userName, active, onActiveChat}) => {

    let clazz = active ? "message_person active_chat" : 'message_person';


    return (
        <NavLink to={`/message/${id}`} key={id} onClick={onActiveChat} className={clazz}>{userName}</NavLink>
    )
}

export default Message;