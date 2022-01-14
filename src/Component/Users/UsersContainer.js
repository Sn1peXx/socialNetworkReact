import React, {useEffect} from "react";
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


const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers();
    }, []);

    const updateCurrentPage = () => {
        props.getUsers();
    }

    return (
        <>
            {props.isFetching ? <Preloader/> :
                <Users
                    updateCurrentPage={updateCurrentPage}
                    users={props.users}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                />
            }
        </>
    )

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