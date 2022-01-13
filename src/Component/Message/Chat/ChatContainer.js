import Chat from "./Chat";

import '../Message.module.css'
import {useFormik} from "formik";
import * as Yup from "yup";

const ChatContainer = (props) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: Yup.object({
            message: Yup.string().min(1, "Минимум 1 символ" ).required("Обязательное поле")
        }),
        onSubmit: values => {
            props.sendMessageCreator(values.message);
            values.message = '';
        }
    })

    return (
        <Chat messageUserChat={props.messageUserChat} formik={formik} />
    )
}

export default ChatContainer;