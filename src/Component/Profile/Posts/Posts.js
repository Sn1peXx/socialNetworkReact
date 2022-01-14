import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

import profileStyle from '../Profile.module.css'


const Posts = ({addPostActionCreator}) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: Yup.object({
            message: Yup.string().min(1, "Минимум 1 символ" ).required("Обязательное поле")
        }),
        onSubmit: values => {
            addPostActionCreator(values.message);
            values.message = '';
        }
    })

    return (
        <div className={profileStyle.posts}>
            <h2 className={profileStyle.posts_title}>Мои записи</h2>
            <form onSubmit={formik.handleSubmit}>
                <textarea
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    placeholder="Что у вас нового?"
                    className={profileStyle.posts_input}
                />
                <button
                    className={profileStyle.posts_send}
                    type={"submit"}
                >Отправить</button>
            </form>
        </div>
    )
}

export default Posts