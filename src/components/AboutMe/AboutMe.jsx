import "./AboutMe.css";
import mePhoto from "../../images/photo-me.png"
import Blank from "../Blank/Blank";

export default function AboutMe() {
    return (
        <section className="aboutme__container" id="aboutme">
            <Blank>
                <h2 className="aboutme__title">Студент</h2>
                <div className="aboutme__info">
                    <h3 className="aboutme__info-name">Виталий</h3>
                    <p className="aboutme__info-age">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutme__info-biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href="https://github.com/Yonas3s" target="blank" className="aboutme__link-github">Github</a>
                    <img src={mePhoto} alt="Фото создателя этого сайта" className="aboutme__info-photo" />
                </div>
            </Blank>
        </section>
    )
}