import "./Profile.css";

export default function Profile() {
    return (
        <section className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form">
                    <div className="profile__form-section">
                        <p className="profile__form-description">Имя</p>
                        <input type="text" className="profile__form-input" defaultValue="Виталий" />
                    </div>
                    <div className="profile__form-section">
                        <p className="profile__form-description">E-mail</p>
                        <input type="text" className="profile__form-input" defaultValue="pochta@yandex.ru" />
                    </div>
                    <button type="submit" className="profile__form-submit">Редактировать</button>
                </form>
                <a className="profile__link" href="www.yandex.ru">Выйти из аккаунта</a>
        </section>
    )
}