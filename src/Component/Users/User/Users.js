import React from "react";
import axios from "axios";

import avatar from '../../../resources/customers.png';
import './Users.css'


const Users = ({users, followAccount, unfollowAccount, setUsersAction}) => {

    const getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => setUsersAction(res.data.items));
        }
    }

    const content = users.map(item => {
        return (
            <div className="user_block" key={item.id}>
                <div className="user_left">
                    <img src={item.photos.small !== null ? item.photos.small : avatar} alt="user avatar" className="user_avatar"/> <br/>
                    {item.followed ?
                        <button onClick={() => followAccount(item.id)}
                                className="user_follow posts_send">Отписаться</button> :
                        <button onClick={() => unfollowAccount(item.id)}
                                className="user_follow posts_send">Подписаться</button>
                    }
                </div>
                <div className="user_right">
                    <h4 className="user_name">{item.name}</h4>
                    <p className="user_status">{item.status ? item.status : 'В сети'}</p>
                    <p className="user_location">{"item.location.country"} · {"item.location.city"}</p>
                </div>
            </div>
        );
    })

    return (
        <div className="user">
            {content}
            <button onClick={() => getUsers()} className="posts_send user_more">Загурзить</button>
        </div>
    )

}

export default Users