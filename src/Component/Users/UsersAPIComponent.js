import React from "react";
import axios from "axios";

import Users from "./User/Users";

import Preloader from "../Common/Preloader/Preloader";

export default class UsersAPIComponent extends React.Component {

    getPost = (request) => {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users${request}`)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsersAction(res.data.items)
            })
            .then(() => window.scrollTo(0, 0));
    }

    componentDidMount() {
        this.getPost(`?count=25`);
    }

    updateCurrentPage = () => {
        this.props.setCurrentPage(this.props.currentPage);
        this.getPost(`?page=${this.props.currentPage}&count=25`);
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> :
                    <Users
                        users={this.props.users}
                        updateCurrentPage={this.updateCurrentPage}
                        followAccount={this.props.followAccount}
                        unfollowAccount={this.props.unfollowAccount}
                    />
                }

            </>
        );
    }
}