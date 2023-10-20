import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";
import { EmailRegexValid } from "../../utils/consts";

export default function Login({ onLogin }) {
    const { values, errors, isInputValid, isValid, handleChange } = useFormValidation({
        initialValues: {
            email: '',
            password: ''
        }
    });

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values.email, values.password);
    }

    return (
        <section className="login">
            <Link to={'/'}><img src={logo} alt="Логотип" className="login__logo" /></Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit} noValidate isValid={isValid}>
                <label htmlFor="login-email" className="login__form-caption">E-mail</label>
                <input name='email' onChange={handleChange} value={values.email} pattern={EmailRegexValid} id="login-email" type="email" className="login__form-input" placeholder="Введите ваш e-mail" isInputValid={isInputValid} required/>
                <span className="form__input-error">{errors.email}</span>
                <label htmlFor="login-password" className="login__form-caption">Пароль</label>
                <input name="password" onChange={handleChange} value={values.password} id="login-password" type="password" className="login__form-input" placeholder="Введите ваш пароль" isInputValid={isInputValid} minLength={3} required/>
                <span className="form__input-error">{errors.password}</span>
                <button type="submit" className={`login__form-submit ${isValid ? '' : 'login__form-disabled'}`} disabled={isValid ? false : true}>Войти</button>
            </form>
            <Link to={'/signup'} className="login__link">
                <span>Еще не зарегистрированы?</span>&nbsp;Регистрация
            </Link>
        </section>
    )
}
