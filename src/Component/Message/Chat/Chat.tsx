import * as React from "react";
import {FC} from "react";

// @ts-ignore
import messageStyle from '../Message.module.css'
import {messageChatType} from "../../../Redux/messageReducer";

type PropsType = {
    messageUserChat: messageChatType[]
    formik: any
}

const Chat: FC<PropsType> = ({messageUserChat, formik}) => {

    const content = messageUserChat.map(item => {
        return (
            <ChatPerson key={item.id} by={item.sendBy} message={item.text} />
        )
    });

    return (
        <div className={messageStyle.chat}>
            {content}
            <form onSubmit={formik.handleSubmit}>
            <textarea
                className={messageStyle.chat_area}
                name="message"
                cols={70} rows={3}
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder="Место для сообщения"
            />
                <button
                    className={messageStyle.chat_send}
                    type={"submit"}
                >Отправить</button>
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