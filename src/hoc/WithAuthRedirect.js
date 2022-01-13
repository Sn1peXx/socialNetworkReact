import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthInfo} from "../Redux/Selectors/authSelector";

const mapStateToPropsForRedirect = state => ({
    isAuth: getAuthInfo(state)
});

export const WithAuthRedirect = Component => {

    class RedirectComponent extends React.Component {
       render() {
           if (!this.props.isAuth) return <Redirect to={"/login"} />

           return <Component {...this.props} />
       }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}