import React from "react";
import {Redirect} from "react-router-dom";

import loginStyle from './Login.module.css'
import LoginForm from "./Form/LoginForm";


const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
       <div className={loginStyle.login_main}>
           <h1 className={loginStyle.login_title}>Войдите в свой аккаунт</h1>
            <LoginForm setAuthUserData={props.setAuthUserData} error={props.error} isAuth={props.isAuth} />
       </div>

    )
}

export default Login;