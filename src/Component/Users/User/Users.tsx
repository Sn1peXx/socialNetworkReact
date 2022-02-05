import {FC} from "react";
import {NavLink} from "react-router-dom";

// @ts-ignore
import avatar from "../../../resources/customers.png";
// @ts-ignore
import userStyle from './Users.module.css'
import {userType} from "../../../Redux/usersReducer";


type PropsType = {
    users: Array<userType>,
    followingInProgress: number[],
    unfollow: (id: number) => void,
    follow: (id: number) => void,
    updateCurrentPage: () => void
}

const Users: FC<PropsType> = ({users, followingInProgress, unfollow, follow, updateCurrentPage}) => {

    const content = users.map(item => {

        return (
            <div className={userStyle.user_block} key={item.id}>
                <div className={userStyle.user_left}>
                   <NavLink to={'/profile/' + item.id}>
                       <img
                           src={item.photos.small !== null ? item.photos.small : avatar}
                           alt="user avatar"
                           className={userStyle.user_avatar}
                       /> <br/>
                   </NavLink>
                    {
                        item.followed ?
                            <button
                                disabled={followingInProgress.some(id => id === item.id)}
                                className={userStyle.user_follow}
                                onClick={() => unfollow(item.id)}

                            >Отписаться</button> :

                            <button
                                disabled={followingInProgress.some(id => id === item.id)}
                                className={userStyle.user_follow}
                                onClick={() => follow(item.id)}

                            >Подписаться</button>

                    }
                </div>
                <div className={userStyle.user_right}>
                    <h4 className={userStyle.user_name}>{item.name}</h4>
                    <p className={userStyle.user_status}>{item.status ? item.status : 'В сети'}</p>
                    <p className={userStyle.user_location}>{"item.location.country"} · {"item.location.city"}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            {content}
            <button onClick={updateCurrentPage} className={userStyle.user_more}>Дальше</button>
        </div>
    )
}

export default Users;