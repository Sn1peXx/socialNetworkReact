import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import {getProfile, getStatus, getUsersPosts} from "../../Redux/Selectors/profileSelector";
import {getAuthUserId} from "../../Redux/Selectors/authSelector";

import './Profile.module.css';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            let userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login')
            }

            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userPosts: getUsersPosts(state),
        profile: getProfile(state),
        status: getStatus(state),
        userId: getAuthUserId(state)
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer);
