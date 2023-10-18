import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";

export default function Login({ onLogin }) {
    const { values, errors, isInputValid, isValid, handleChange } = useFormValidation()

    function handleSubmit(e) {
        e.preventDefault();
        onLogin({
            email: values.email,
            password: values.password,
        });
    }

    return (
        <section className="login">
            <Link to={'/'}><img src={logo} alt="Логотип" className="login__logo" /></Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="login-email" className="login__form-caption">E-mail</label>
                <input name='email' onChange={(evt) => {
                    handleChange(evt)
                }} value={values.email} id="login-email" type="email" className="login__form-input" placeholder="Введите ваш e-mail" required/>
                <span className="form__input-error">{errors.email}</span>
                <label htmlFor="login-password" className="login__form-caption">Пароль</label>
                <input name="password" onChange={(evt) => {
                    handleChange(evt)
                }} value={values.password} id="login-password" type="password" className="login__form-input" placeholder="Введите ваш пароль" required/>
                <span className="form__input-error">{errors.password}</span>
                <button type="submit" className="login__form-submit">Войти</button>
            </form>
            <Link to={'/signup'} className="login__link">
                <span>Еще не зарегистрированы?</span>&nbsp;Регистрация
            </Link>
        </section>
    )
}