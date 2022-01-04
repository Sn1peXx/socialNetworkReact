import React from "react";

import avatar from '../../../resources/customers.png';
import './Users.css'


const Users = ({users, followAccount, unfollowAccount}) => {

    // setUsersAction([
        // {id: 1, follow: false, userName: "Максим Торопов", status: 'Школа № 9', location: {country: 'Россия', city: 'Санкт-Петербург'}},
        // {id: 2, follow: true, userName: "Сергей Перфильев", status: 'СПбГЭУ', location: {country: 'Россия', city: 'Москва'}},
        // {id: 3, follow: false, userName: "Даниил Капалыгин", status: 'Технический колледж управления и коммерции (СПб ТКУиК, бывш. ЛРАСТ)', location: {country: 'Россия', city: 'Екатеринбург'}},
    // ])

    const content = users.map(item => {
        return (
            <div className="user_block" key={item.id}>
                <div className="user_left">
                    <img src={avatar} alt="user avatar" className="user_avatar"/> <br/>
                    {item.follow ?
                        <button onClick={() => followAccount(item.id)} className="user_follow posts_send">Подписаться</button> :
                        <button onClick={() => unfollowAccount(item.id)} className="user_follow posts_send">Отписаться</button>
                    }
                </div>
                <div className="user_right">
                    <h4 className="user_name">{item.userName}</h4>
                    <p className="user_status">{item.status}</p>
                    <p className="user_location">{item.location.country} · {item.location.city}</p>
                </div>
            </div>
        );
    })

    return (
        <div className="user">
            {content}
        </div>
    )
}

export default Users