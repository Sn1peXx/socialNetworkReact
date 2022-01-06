import {connect} from "react-redux";
import axios from "axios";
import React from "react";

import Profile from "./Prof/Profile";
import {setUserProfile} from "../../../Redux/profileReducer";

import './Prof/Profile.css';
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => this.props.setUserProfile(res.data))
            .then(() => window.scrollTo(0, 0));
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

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: profile => {
            dispatch(setUserProfile(profile))
        }
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);