import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthInfo} from "../Redux/Selectors/authSelector";
import {AppStateType} from "../Redux/reduxStore";
import {FC} from "react";

const mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: getAuthInfo(state)
} as PropsType);

type PropsType = {
    isAuth: boolean
}

export const WithAuthRedirect = Component => {

    const RedirectComponent: FC<PropsType> = props => {
       if (!props.isAuth) return <Redirect to={"/login"} />

       return <Component {...props} />
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}