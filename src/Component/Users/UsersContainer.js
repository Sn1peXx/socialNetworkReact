import Users from "./User/Users";
import {followAccount, unfollowAccount} from "../../Redux/usersReducer";

const UsersContainer = ({dispatch, users}) => {

    const onUserFollow = (id) => {
        dispatch(followAccount(id));
    }

    const onUserUnfollow = (id) => {
        dispatch(unfollowAccount(id));
    }

    // const onUserAction = (users) => {
    //     if (users.length === 0) {
    //         setUsersAction(users)
    //     }
    //
    // }


    return (
        <Users users={users} followAccount={onUserFollow} unfollowAccount={onUserUnfollow} />
    )
}

export default UsersContainer;