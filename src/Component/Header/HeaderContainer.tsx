import * as React from "react";
import {connect} from "react-redux";

// @ts-ignore
import Header from "./Header.tsx";
// @ts-ignore
import {logoutAuthUserData} from "../../Redux/authReducer.ts";
import {getAuthInfo, getAuthLogin} from "../../Redux/Selectors/authSelector";

const HeaderContainer = (props) => {

    return <Header isAuth={props.isAuth} login={props.login} logoutAuthUserData={props.logoutAuthUserData} />
}

const mapStateToProps = state => {
    return {
        isAuth: getAuthInfo(state),
        login: getAuthLogin(state)
    }
} 


export default connect(mapStateToProps, {logoutAuthUserData})(HeaderContainer);