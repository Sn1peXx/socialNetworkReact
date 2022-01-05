import Users from "./User/Users";
import {followAccount, setUsersAction, unfollowAccount} from "../../Redux/usersReducer";

const UsersContainer = ({dispatch, users}) => {

    const onUserFollow = (id) => {
        dispatch(followAccount(id));
    }

    const onUserUnfollow = (id) => {
        dispatch(unfollowAccount(id));
    }

    const setUserHandler = (users) => {
        dispatch(setUsersAction(users));
    }


    return (
        <Users users={users} followAccount={onUserFollow} unfollowAccount={onUserUnfollow} setUsersAction={setUserHandler}/>
    )
}

export default UsersContainer;