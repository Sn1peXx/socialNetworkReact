import React from "react";
import {compose} from "redux";
import Users from "./User/Users";
import Preloader from "../Common/Preloader/Preloader";
import {connect} from "react-redux";

import {
    follow,
    getUsers,
    unfollow,
} from "../../Redux/usersReducer";
import {getCurrentPage, getFetching, getFollowing, getUsersPage} from "../../Redux/Selectors/userSelector";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    updateCurrentPage = () => {
        this.props.getUsers();
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    updateCurrentPage={this.updateCurrentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: getUsersPage(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowing(state)
    }
}


export default compose(
    connect(mapStateToProps, {getUsers, follow, unfollow})
)(UsersContainer)