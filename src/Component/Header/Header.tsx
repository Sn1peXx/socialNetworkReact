import {NavLink} from "react-router-dom";

// @ts-ignore
import headerStyle from './Header.module.css'
// @ts-ignore
import logo from '../../resources/logo_top(no_text).png';
import {FC} from "react";

type PropsType = {
    isAuth: boolean,
    logoutAuthUserData: () => void,
    login: string
}

const Header: FC<PropsType> = ({isAuth, logoutAuthUserData, login}) => {
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