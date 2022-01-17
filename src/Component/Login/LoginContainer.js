import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import Login from "./Login";
import {getAuthError, getAuthInfo, getCapthcaUrl} from "../../Redux/Selectors/authSelector";
import {setAuthUserData} from "../../Redux/authReducer";


const LoginContainer = (props) => {

    return (
        <Login setAuthUserData={props.setAuthUserData} isAuth={props.isAuth} error={props.error} captchaUrl={props.captchaUrl} />
    )
}

const mapStateToProps = state => {
    return {
        isAuth: getAuthInfo(state),
        error: getAuthError(state),
        captchaUrl:getCapthcaUrl(state)
    }
}

export default compose(connect(mapStateToProps, {setAuthUserData}))(LoginContainer);