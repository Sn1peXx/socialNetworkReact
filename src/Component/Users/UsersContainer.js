import UsersAPIComponent from "./UsersAPIComponent";

import {
    followAccount,
    setCurrentPage,
    setIsFetching,
    setUsersAction,
    unfollowAccount
} from "../../Redux/usersReducer";


const UsersContainer = ({dispatch, users, currentPage, isFetching}) => {

    const onUserFollow = (id) => {
        dispatch(followAccount(id));
    }

    const onUserUnfollow = (id) => {
        dispatch(unfollowAccount(id));
    }

    const setUserHandler = (users) => {
        dispatch(setUsersAction(users));
    }

    const currentPageHandler = (page) => {
        dispatch(setCurrentPage(page + 1));
    }

    const fetchLoadingHandler = (fetch) => {
        dispatch(setIsFetching(fetch));
    }


    return (
        <UsersAPIComponent
            users={users}
            followAccount={onUserFollow}
            unfollowAccount={onUserUnfollow}
            currentPage={currentPage}
            setUsersAction={setUserHandler}
            setCurrentPage={currentPageHandler}
            isFetching={isFetching}
            setIsFetching={fetchLoadingHandler}
        />
    )
}

export default UsersContainer;