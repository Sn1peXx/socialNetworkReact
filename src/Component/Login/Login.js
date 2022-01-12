import React from "react";
import {Redirect} from "react-router-dom";

import './Login.css'
import LoginForm from "./Form/LoginForm";


const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
       <div className="login_main">
           <h1 className="login_title">Войдите в свой аккаунт</h1>
            <LoginForm setAuthUserData={props.setAuthUserData} error={props.error} isAuth={props.isAuth} />
       </div>

    )
}

export default Login;