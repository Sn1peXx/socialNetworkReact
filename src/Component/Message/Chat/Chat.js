import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

import messageStyle from '../Message.module.css'


const Chat = ({messageUserChat, sendMessageCreator}) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: Yup.object({
            message: Yup.string().min(1, "Минимум 1 символ" ).required("Обязательное поле")
        }),
        onSubmit: values => {
            if (values.trim > 0) {
                sendMessageCreator(values.message);
                values.message = '';
            }
        }
    })

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
                cols="70" rows="3"
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