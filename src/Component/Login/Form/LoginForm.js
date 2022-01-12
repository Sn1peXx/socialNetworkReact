import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';

const LoginForm = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            terms: false
        },
        validationSchema: Yup.object({
            email: Yup.string().min(2, "Минимум 2 символа" ).required("Обязательное поле"),
            password: Yup.string().min(5, "Минимум 5 символов").required("Обязательное поле"),
            terms: Yup.boolean()
        }),
        onSubmit: values => {
            props.setAuthUserData(values.email, values.password, values.terms);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="login">
                <input
                    className="input_login"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    placeholder={"Введите логин"}/>
                {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
                <input
                    type="password"
                    className="input_login"
                    placeholder={"Введите пароль"}
                    id={"password"}
                    name={"password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}
                <br/>
                <label className="login_remember">
                    <input
                        className="login_checkbox"
                        type="checkbox"
                        name={"terms"}
                        value={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                Запомнить меня</label>
            </div>
            {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null}
            {props.error ? <p className="error_main">Неверный логин или пароль</p> : null}
            <button className="login_btn" type={"submit"} >Войти</button>
        </form>
    )
}

export default LoginForm;