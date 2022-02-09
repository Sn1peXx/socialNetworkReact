import {FC} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

import {messageChatType} from "../../../Redux/messageReducer";
// @ts-ignore
import Chat from "./Chat.tsx";

import '../Message.module.css'


type PropsType = {
    sendMessageCreator: (str: string) => void,
    messageUserChat: messageChatType[]
}

const ChatContainer: FC<PropsType> = ({sendMessageCreator, messageUserChat}) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: Yup.object({
            message: Yup.string().min(1, "Минимум 1 символ" ).required("Обязательное поле")
        }),
        onSubmit: values => {
            sendMessageCreator(values.message);
            values.message = '';
        }
    })

    return (
        <Chat messageUserChat={messageUserChat} formik={formik} />
    )
}

export default ChatContainer;