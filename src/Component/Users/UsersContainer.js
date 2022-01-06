import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";

import {
    followAccount,
    setCurrentPage,
    setIsFetching,
    setUsersAction,
    unfollowAccount
} from "../../Redux/usersReducer";


const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followAccount: id => {
            dispatch(followAccount(id));
        },
        unfollowAccount: id => {
            dispatch(unfollowAccount(id));
        },
        setUsersAction: users => {
            dispatch(setUsersAction(users));
        },
        setCurrentPage: page => {
            dispatch(setCurrentPage(page + 1));
        },
        setIsFetching: fetch => {
            dispatch(setIsFetching(fetch));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;