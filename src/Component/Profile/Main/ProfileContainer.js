import React from "react";

import {setUserProfile} from "../../../Redux/profileReducer";
import ProfileAPIComponent from "./ProfileAPIComponent";

import './Prof/Profile.css'


 const ProfileContainer = ({dispatch, userPosts, profile}) => {

     const changeProfile = (profile) => {
         dispatch(setUserProfile(profile));
     }

    return (
        <ProfileAPIComponent setUserProfile={changeProfile} dispatch={dispatch} userPosts={userPosts} profile={profile} />
    )
}

export default ProfileContainer;