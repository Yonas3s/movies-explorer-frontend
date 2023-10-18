import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";
import { useState } from "react";

export default function Register({ onRegister }) {
    const { values, errors, isInputValid, isValid, handleChange, } = useFormValidation()

    function handleSubmit(e) {
        e.preventDefault();
        onRegister({
            name: values.username,
            email: values.email,
            password: values.password,
        });
    }

    return (
        <section className="register">
            <Link to={'/'}><img src={logo} alt="Логотип" className="register__logo" /></Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="register-name" className="register__form-caption">Имя</label>
                <input onChange={(evt) => {
                    handleChange(evt)
                }} value={values.username} name='username' type="text" id="register-name" className="register__form-input" required />
                <span className="form__input-error">{errors.username}</span>
                <label htmlFor="register-email" className="register__form-caption">E-mail</label>
                <input onChange={(evt) => {
                    handleChange(evt)
                }}
                    value={values.email} name='email' type="email" id="register-email" className="register__form-input" required />
                <span className="form__input-error">{errors.email}</span>
                <label htmlFor="register-password" className="register__form-caption">Пароль</label>
                <input onChange={(evt) => {
                    handleChange(evt)
                }} value={values.password} name='password' type="password" id="register-password" className="register__form-input" required />
                <span className="form__input-error">{errors.password}</span>
                <button type="submit" className="register__form-submit">Зарегистрироваться</button>
            </form>
            <Link to={'/signin'} className="register__link">
                <span>Уже зарегистрированы?</span>&nbsp;Войти
            </Link>
        </section>
    )
}