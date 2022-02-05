import * as React from "react";
import {Redirect} from "react-router-dom";

// @ts-ignore
import loginStyle from './Login.module.css'
// @ts-ignore
import LoginForm from "./Form/LoginForm.tsx";
import {FC} from "react";

type LoginType = {
    isAuth: boolean,
    error: string,
    setAuthUserData: () => void,
    captchaUrl: string
}

const Login: FC<LoginType> = ({isAuth, error, setAuthUserData, captchaUrl}) => {

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
       <div className={loginStyle.login_main}>
           <h1 className={loginStyle.login_title}>Войдите в свой аккаунт</h1>
            <LoginForm setAuthUserData={setAuthUserData} error={error} captchaUrl={captchaUrl} />
       </div>

    )
}

export default Login;