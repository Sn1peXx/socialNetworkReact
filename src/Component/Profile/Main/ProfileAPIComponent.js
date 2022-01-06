import React from "react";
import axios from "axios";

import Profile from "./Prof/Profile";

export default class ProfileAPIComponent extends React.Component {

    componentDidMount() {
        // let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => this.props.setUserProfile(res.data))
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}