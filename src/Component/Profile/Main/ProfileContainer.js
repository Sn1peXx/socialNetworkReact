import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from "./Prof/Profile";
import {getUserProfile} from "../../../Redux/profileReducer";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

import './Prof/Profile.css';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userPosts: state.profilePage.userPosts,
        profile: state.profilePage.profile
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
