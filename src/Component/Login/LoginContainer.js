import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import Login from "./Login";
import {getAuthError, getAuthInfo} from "../../Redux/Selectors/authSelector";

import {
    setAuthUserData
} from "../../Redux/authReducer";



class LoginContainer extends React.Component {

    render() {
        return (
            <Login setAuthUserData={this.props.setAuthUserData} isAuth={this.props.isAuth} error={this.props.error} />
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: getAuthInfo(state),
        error: getAuthError(state)
    }
}

export default compose(connect(mapStateToProps, {setAuthUserData}))(LoginContainer);