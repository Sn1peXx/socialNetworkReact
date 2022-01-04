import {useState} from "react";

import '../Message.css'


const Chat = ({messageUserChat, sendMessageCreator}) => {

    const [text, setText] = useState('');

    const onNewMessageChange = (event) => {
        setText(event.target.value)
    }

    const onSendMessageClick = () => {
        sendMessageCreator(text);
        setText('');
    }

    const content = messageUserChat.map(item => {
        return (
            <ChatPerson key={item.id} by={item.sendBy} message={item.text} />
        )
    });

    return (
        <div className="chat">
            {content}
            <form>
                <textarea className="chat_area" value={text} onChange={onNewMessageChange} name="chat_area" cols="70" rows="3" placeholder="Место для сообщения"/>
                <button className="posts_send chat_send" type="button" onClick={() => onSendMessageClick()}>Отправить</button>
            </form>
        </div>
    )
}


const ChatPerson = ({by, message}) => {
    return (
        <div className="chat_message">
            <div className="chat_by">{by}</div>
            <div className="chat_text">{message}</div>
        </div>
    )
}

export default Chat;