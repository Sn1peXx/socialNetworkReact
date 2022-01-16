import {useFormik} from "formik";
import * as Yup from "yup";
import profileStyle from "../Profile.module.css";
import React from "react";

const ProfileChange = ({setProfileUserData}) => {
    const formik = useFormik({
        initialValues: {
            aboutMe: '',
            fullName: '',
            lookingForAJobDescription: ''
        },
        validationSchema: Yup.object({
            aboutMe: Yup.string().min(2, "Минимум 1 символ" ).required("Обязательное поле"),
            fullName: Yup.string().min(2, "Минимум 1 символ" ).required("Обязательное поле"),
            lookingForAJobDescription: Yup.string().min(2, "Минимум 1 символ" ).required("Обязательное поле")
        }),
        onSubmit: values => {
            setProfileUserData(values.aboutMe, values.fullName, values.lookingForAJobDescription)
        }
    })

    return (
        <div className={profileStyle.posts_info}>
            <form onSubmit={formik.handleSubmit}>
                <div className={profileStyle.profile_wrap}>
                    <textarea
                        name="aboutMe"
                        value={formik.values.aboutMe}
                        onChange={formik.handleChange}
                        placeholder="Обо мне"
                        className={profileStyle.posts_input_info}
                    />
                    <textarea
                        name="fullName"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        placeholder="Полное имя"
                        className={profileStyle.posts_input_info}
                    />
                    <textarea
                        name="lookingForAJobDescription"
                        value={formik.values.lookingForAJobDescription}
                        onChange={formik.handleChange}
                        placeholder="Сфера деятельности"
                        className={profileStyle.posts_input_info}
                    />
                </div>
                <button
                    className={profileStyle.posts_send_info}
                    type={"submit"}
                >Сохранить</button>
            </form>
        </div>
    )
}

export default ProfileChange;