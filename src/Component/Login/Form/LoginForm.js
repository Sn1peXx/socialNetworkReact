import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import loginStyle from "../Login.module.css";

const LoginForm = ({setAuthUserData, error, captchaUrl}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            terms: false,
            captcha: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().min(2, "Минимум 2 символа" ).required("Обязательное поле"),
            password: Yup.string().min(5, "Минимум 5 символов").required("Обязательное поле"),
            terms: Yup.boolean()
        }),
        onSubmit: values => {
            setAuthUserData(values.email, values.password, values.terms, values.captcha);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="login">
                <input
                    className={loginStyle.input_login}
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    placeholder={"Введите логин"}/>
                {formik.errors.email && formik.touched.email ? <div className={loginStyle.error}>{formik.errors.email}</div> : null}
                <br/>
                <input
                    type="password"
                    className={loginStyle.input_login}
                    placeholder={"Введите пароль"}
                    id={"password"}
                    name={"password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? <div className={loginStyle.error}>{formik.errors.password}</div> : null}
                <br/>
                <label className={loginStyle.login_remember}>
                    <input
                        className={loginStyle.login_checkbox}
                        type="checkbox"
                        name={"terms"}
                        value={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                Запомнить меня</label>
            </div>
            {formik.errors.terms && formik.touched.terms ? <div className={loginStyle.error}>{formik.errors.terms}</div> : null}
            {error ? <p className={loginStyle.error_main}>Неверный логин или пароль</p> : null}

            {captchaUrl ? <img src={captchaUrl} alt='captcha'/> : null} <br/>
            {captchaUrl
                ? <input
                    className={loginStyle.captcha_input}
                    type="text"
                    name={"captcha"}
                    value={formik.values.captcha}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                : null}
            <br/>
            <button className={loginStyle.login_btn} type={"submit"} >Войти</button>

        </form>
    )
}

export default LoginForm;