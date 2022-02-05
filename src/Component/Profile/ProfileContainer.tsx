import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

// @ts-ignore
import Profile from "./Profile.tsx";
import {
    getUserProfile,
    getUserStatus, ProfileType,
    savePhoto,
    setProfileUserData,
    updateUserStatus
    // @ts-ignore
} from "../../Redux/profileReducer.ts";
import {getProfile, getStatus, getUsersPosts} from "../../Redux/Selectors/profileSelector";
import {getAuthUserId} from "../../Redux/Selectors/authSelector";

import './Profile.module.css';
import * as React from "react";


type PropsType = {
    match,
    history,
    userId: number,
    getUserProfile: (id: number) => void,
    getUserStatus: (id: number) => void,
    profile: ProfileType,
    savePhoto: (file: string) => void,
    status: string,
    updateUserStatus: () => void,
    setProfileUserData: () => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: number = this.props.match.params.userId;
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
                isOwner={!!this.props.match.params.userId}
                profile={this.props.profile}
                savePhoto={this.props.savePhoto}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                setProfileUserData={this.props.setProfileUserData}/>
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



export default compose<any>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, setProfileUserData}),
    withRouter,
)(ProfileContainer);
