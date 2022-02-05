import {FC, useEffect} from "react";
import {compose} from "redux";
import Preloader from "../Common/Preloader/Preloader";
import {connect} from "react-redux";
import {getCurrentPage, getFetching, getFollowing, getUsersPage} from "../../Redux/Selectors/userSelector";
import {AppStateType} from "../../Redux/reduxStore";

// @ts-ignore
import Users from "./User/Users.tsx";

import {
    follow,
    getUsers,
    unfollow, userType,
    // @ts-ignore
} from "../../Redux/usersReducer.ts";


type PropsType = {
    isFetching: boolean,
    getUsers: () => void,
    users: userType[],
    follow: () => void,
    unfollow: () => void,
    followingInProgress: number[]
}
 
const UsersContainer: FC<PropsType> = (props) => {

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

const mapStateToProps = (state: AppStateType) => {
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