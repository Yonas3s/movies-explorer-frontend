import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="register">
            <Link to={'/'}><img src={logo} alt="Логотип" className="register__logo" /></Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <label htmlFor="register-name" className="register__form-caption">Имя</label>
                <input type="text" id="register-name" className="register__form-input" />
                <label htmlFor="register-email" className="register__form-caption">E-mail</label>
                <input type="text" id="register-email" className="register__form-input" />
                <label htmlFor="register-password" className="register__form-caption">Пароль</label>
                <input type="text" id="register-password" className="register__form-input" />
                <button type="submit" className="register__form-submit">Зарегистрироваться</button>
            </form>
            <Link to={'/signin'} className="register__link">
                <span>Уже зарегистрированы?</span>&nbsp;Войти
            </Link>
        </section>
    )
}