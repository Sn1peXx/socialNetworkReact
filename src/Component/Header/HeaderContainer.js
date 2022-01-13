import React from "react";
import {connect} from "react-redux";

import Header from "./Header";
import {logoutAuthUserData} from "../../Redux/authReducer";
import {getAuthInfo, getAuthLogin} from "../../Redux/Selectors/authSelector";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: getAuthInfo(state),
        login: getAuthLogin(state)
    }
}


export default connect(mapStateToProps, {logoutAuthUserData})(HeaderContainer);