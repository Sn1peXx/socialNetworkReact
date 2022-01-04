import navStyle from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={navStyle.nav}>
            <Link to={'/profile'} className={navStyle.nav_link}>Профиль</Link>
            <Link to={'#'} className={navStyle.nav_link}>Новости</Link>
            <Link to={'/message'} className={navStyle.nav_link}>Сообщения</Link>
            <Link to={'/users'} className={navStyle.nav_link}>Друзья</Link>
            <Link to={'#'} className={navStyle.nav_link}>Музыка</Link>
            <Link to={'#'} className={navStyle.nav_link}>Настройки</Link>
        </div>
    )
}

export default Nav;