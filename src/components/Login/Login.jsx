import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Blank from "../Blank/Blank";

export default function Login() {
    return (
        <section className="login__container">
            <Blank>
                <Link to={'/'}><img src={logo} alt="logo" className="login__logo" /></Link>
                <h1 className="login__title">Рады видеть!</h1>
                <form className="login__form">
                    <p className="login__form-caption">E-mail</p>
                    <input type="text" className="login__form-input" />
                    <p className="login__form-caption">Пароль</p>
                    <input type="text" className="login__form-input" />
                    <button type="submit" className="login__form-submit">Войти</button>
                </form>
                <Link to={'/signup'} className="login__link">
                    <span>Еще не зарегистрированы?</span>&nbsp;Регистрация
                </Link>
            </Blank>
        </section>
    )
}