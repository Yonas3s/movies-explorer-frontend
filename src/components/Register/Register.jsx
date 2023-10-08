import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="register__container">
            <Link to={'/'}><img src={logo} alt="logo" className="register__logo" /></Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <p className="register__form-caption">Имя</p>
                <input type="text" className="register__form-input" />
                <p className="register__form-caption">E-mail</p>
                <input type="text" className="register__form-input" />
                <p className="register__form-caption">Пароль</p>
                <input type="text" className="register__form-input" />
                <button type="submit" className="register__form-submit">Зарегистрироваться</button>
            </form>
            <Link to={'/signin'} className="register__link">
                <span>Уже зарегистрированы?</span>&nbsp;Войти
            </Link>
        </section>
    )
}