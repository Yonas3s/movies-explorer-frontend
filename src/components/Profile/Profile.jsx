import { useContext, useEffect, useState } from "react";
import useFormValidation from "../../utils/useFormValidation";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Profile({ onUpdateInfo, signOut }) {
    const currentUser = useContext(CurrentUserContext);
    const [isLastValueInput, setIsLastValueInput] = useState(false);
    const { values, handleChange, reset } = useFormValidation();

    useEffect(() => {
        if (currentUser) {
            reset(currentUser);
        }
    }, [currentUser, reset]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateInfo(values.name, values.email);
    }

    useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsLastValueInput(true);
        } else {
            setIsLastValueInput(false);
        }

    }, [values, currentUser.name, currentUser.email]);

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form-section">
                    <p className="profile__form-description">Имя</p>
                    <input onChange={handleChange} type="text" name="name" defaultValue={values.name || ''} className="profile__form-input" />
                </div>
                <div className="profile__form-section">
                    <p className="profile__form-description">E-mail</p>
                    <input onChange={handleChange} type="text" name="email" defaultValue={values.email || ''} className="profile__form-input" />
                </div>
                <button type="submit" className={`profile__form-submit ${isLastValueInput ? 'profile__form-disabled' : ''}`} disabled={isLastValueInput ? true : false}>Редактировать</button>
            </form>
            <button type='button' className="profile__link" onClick={signOut}>Выйти из аккаунта</button>
        </section>
    )
}