import React from "react";
import {compose} from "redux";
import Users from "./User/Users";
import Preloader from "../Common/Preloader/Preloader";

import {
    follow,
    getUsers,
    unfollow,
} from "../../Redux/usersReducer";
import {connect} from "react-redux";



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
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


// export default connect(mapStateToProps, {getUsers, follow, unfollow})(UsersContainer);
export default compose(
    connect(mapStateToProps, {getUsers, follow, unfollow})
)(UsersContainer)