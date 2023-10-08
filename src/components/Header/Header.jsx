import logo from "../../images/logo.svg";
import iconAccount from "../../images/icon-account.svg"
import "./Header.css"
import { Link } from "react-router-dom";
// import Blank from "../Blank/Blank";

export default function Header({ name, loggenIn }) {
    return (
        <header className={`header ${name === 'main' ? 'header-active' : ''}`} >
            <Link to={'/'}><img src={logo} alt="Логотип" className="header__logo" /></Link>
            {loggenIn === false ? (
                <div className="header__links">
                    <Link to={'/signup'} className="header__link header__link-bold header__link-signup">Регистрация</Link>
                    <Link to={'/signin'} className="header__link header__link-bold header__link-signin">Войти</Link>
                </div>
            ) : (
                <div className="header__links">
                    <div className="header__links-movies">
                        <Link to={'/movies'} className="header__link header__link-movies">Фильмы</Link>
                        <Link to={'/saved-movies'} className="header__link header__link-favorite-movies">Сохраненные фильмы</Link>
                    </div>
                    <div className="header__link-account">
                        <Link to={'/profile'} className="header__link header__link-bold header__link-account-text">Аккаунт</Link>
                        <img src={iconAccount} alt="Иконка аккаунта" />
                    </div>
                </div>
            )
            }
        </header >
    )
}

