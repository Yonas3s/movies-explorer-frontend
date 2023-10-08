import "./Portfolio.css";
import arrowLink from "../../images/arrow-link.svg";
import Blank from "../Blank/Blank";

export default function Portfolio() {
    return (
        <section className="portfolio__container">
            <Blank>
                <p className="portfolio__title">Портфолио</p>
                <div className="portfolio__links">
                    <a className="portfolio__link" href={"https://yonas3s.github.io/first-project/"} target={'blank'}>
                        <p className="portfolio__link-title">Статичный сайт</p>
                        <img className="portfolio__link-arrow" src={arrowLink} alt="Стрелка для ссылки" />
                    </a>
                    <a className="portfolio__link" href={"https://yonas3s.github.io/russian_travel/"} target={'blank'}>
                        <p className="portfolio__link-title">Адаптивный сайт</p>
                        <img className="portfolio__link-arrow" src={arrowLink} alt="Стрелка для ссылки" />
                    </a>
                    <a className="portfolio__link" href={"https://yonasssproject.nomoredomainsicu.ru"} target={'blank'}>
                        <p className="portfolio__link-title">Одностраничное приложение</p>
                        <img className="portfolio__link-arrow" src={arrowLink} alt="Стрелка для ссылки" />
                    </a>
                </div>
            </Blank>
        </section>
    )
}