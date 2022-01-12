import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from "./Prof/Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../Redux/profileReducer";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

import './Prof/Profile.css';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21729;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            const userId = 21729;

            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userPosts: state.profilePage.userPosts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
