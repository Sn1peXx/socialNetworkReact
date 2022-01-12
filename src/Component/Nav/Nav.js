import navStyle from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={navStyle.nav}>
            <NavLink to={`/profile`} className={navStyle.nav_link}>Профиль</NavLink>
            <NavLink to={'#'} className={navStyle.nav_link}>Новости</NavLink>
            <NavLink to={'/message'} className={navStyle.nav_link}>Сообщения</NavLink>
            <NavLink to={'/users'} className={navStyle.nav_link}>Друзья</NavLink>
            <NavLink to={'#'} className={navStyle.nav_link}>Музыка</NavLink>
            <NavLink to={'#'} className={navStyle.nav_link}>Настройки</NavLink>
        </div>
    )
}

export default Nav;