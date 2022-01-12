import {useState} from "react";

import messageStyle from '../Message.module.css'


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
        <div className={messageStyle.chat}>
            {content}
            <form>
                <textarea className={messageStyle.chat_area} value={text} onChange={onNewMessageChange} name="chat_area" cols="70" rows="3" placeholder="Место для сообщения"/>
                <button className={messageStyle.chat_send} type="button" onClick={() => onSendMessageClick()}>Отправить</button>
            </form>
        </div>
    )
}


const ChatPerson = ({by, message}) => {
    return (
        <div className={messageStyle.chat_message}>
            <div className={messageStyle.chat_by}>{by}</div>
            <div className={messageStyle.chat_text}>{message}</div>
        </div>
    )
}

export default Chat;