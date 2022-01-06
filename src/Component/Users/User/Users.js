import React from "react";
import {NavLink} from "react-router-dom";

import avatar from "../../../resources/customers.png";

import './Users.css'


const Users = (props) => {

    const content = props.users.map(item => {
        return (
            <div className="user_block" key={item.id}>
                <div className="user_left">
                   <NavLink to={'/profile/' + item.id}>
                       <img src={item.photos.small !== null ? item.photos.small : avatar} alt="user avatar" className="user_avatar"/> <br/>
                   </NavLink>
                    {item.followed ?
                        <button onClick={() => props.followAccount(item.id)}
                                className="user_follow posts_send">Отписаться</button> :
                        <button onClick={() => props.unfollowAccount(item.id)}
                                className="user_follow posts_send">Подписаться</button>
                    }
                </div>
                <div className="user_right">
                    <h4 className="user_name">{item.name}</h4>
                    <p className="user_status">{item.status ? item.status : 'В сети'}</p>
                    <p className="user_location">{"item.location.country"} · {"item.location.city"}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="user">
            {content}
            <button onClick={() => props.updateCurrentPage()} className="posts_send user_more">Дальше</button>
        </div>
    )
}

export default Users;