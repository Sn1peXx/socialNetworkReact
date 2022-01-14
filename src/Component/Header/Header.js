import {NavLink} from "react-router-dom";

import headerStyle from './Header.module.css'
import logo from '../../resources/logo_top(no_text).png';

const Header = ({isAuth, logoutAuthUserData, login}) => {
    return (
        <header className={headerStyle.header}>
            <div className="container">
                <img src={logo} alt="Logo" width={100}/>
                {isAuth ? <p className={headerStyle.login} onClick={() => logoutAuthUserData()}>{login}</p> :
                    <NavLink className={headerStyle.sign_in} to={'/login'}>Войти</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;