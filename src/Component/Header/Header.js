import headerStyle from './Header.module.css'
import logo from '../../resources/logo_top(no_text).png';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className="container">
                <img src={logo} alt="Logo" width={100}/>
            </div>
        </header>
    )
}

export default Header;