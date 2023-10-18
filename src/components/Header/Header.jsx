import logo from "../../images/logo.svg";
import iconAccount from "../../images/icon-account.svg"
import iconAccountWhite from "../../images/icon-account-white.svg"
import "./Header.css"
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import useWindowDimensions from "../../utils/useWindowDimensions/useWindowDimension";
import { useEffect, useState } from "react";

export default function Header({ location, loggedIn }) {
    const [bigWidth, setBigWidth] = useState();
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width > '768') {
            setBigWidth(true);
        } else {
            setBigWidth(false);
        }
    }, [width])

    return (
        <header className={`header ${location === 'main' ? 'header-active' : ''}`} >
            <Link to={'/'}><img src={logo} alt="Логотип" className='header__logo' /></Link>
            {loggedIn === false ? (
                <nav className="header__links">
                    <Link to={'/signup'} className="header__link header__link-bold header__link-signup">Регистрация</Link>
                    <Link to={'/signin'} className="header__link header__link-bold header__link-signin">Войти</Link>
                </nav>
            ) : (bigWidth ? (
                <nav className="header__links">
                    <div className="header__links-movies">
                        <Link to={'/movies'} className="header__link-movies">Фильмы</Link>
                        <Link to={'/saved-movies'} className="header__link header__link-favorite-movies">Сохраненные фильмы</Link>
                    </div>
                    <div className="header__link-account">
                        <Link to={'/profile'} className="header__link header__link-bold header__link-account-text">Аккаунт</Link>
                        <img src={location === 'main' ? iconAccount : iconAccountWhite} alt="Иконка аккаунта" />
                    </div>
                </nav>
            ) : (
                <nav className="header__links">
                    <BurgerMenu />
                </nav>
            )
            )
            }
        </header >
    )
}

