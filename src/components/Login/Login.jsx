import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="login">
                <Link to={'/'}><img src={logo} alt="Логотип" className="login__logo" /></Link>
                <h1 className="login__title">Рады видеть!</h1>
                <form className="login__form">
                    <label htmlFor="login-email" className="login__form-caption">E-mail</label>
                    <input id="login-email" type="text" className="login__form-input" />
                    <label htmlFor="login-password" className="login__form-caption">Пароль</label>
                    <input id="login-password" type="text" className="login__form-input" />
                    <button type="submit" className="login__form-submit">Войти</button>
                </form>
                <Link to={'/signup'} className="login__link">
                    <span>Еще не зарегистрированы?</span>&nbsp;Регистрация
                </Link>
        </section>
    )
}