import "./Portfolio.css";
import arrowLink from "../../images/arrow-link.svg";
import Blank from "../Blank/Blank";

export default function Portfolio() {
    return (
        <section className="portfolio__container">
            <Blank>
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__lists">
                    <li className="portfolio__list">
                        <a className="portfolio__link" href={"https://yonas3s.github.io/first-project/"} target={'blank'}>
                            <p className="portfolio__link-title">Статичный сайт</p>
                            <img className="portfolio__link-arrow" src={arrowLink} alt="Стрелка для ссылки" />
                        </a>
                    </li>
                    <li className="portfolio__list">
                        <a className="portfolio__link" href={"https://yonas3s.github.io/russian_travel/"} target={'blank'}>
                            <p className="portfolio__link-title">Адаптивный сайт</p>
                            <img className="portfolio__link-arrow" src={arrowLink} alt="Стрелка для ссылки" />
                        </a>
                    </li>
                    <li className="portfolio__list">
                        <a className="portfolio__link portfolio__link-last" href={"https://github.com/Yonas3s/react-mesto-api-full-gha"} target={'blank'}>
                            <p className="portfolio__link-title">Одностраничное приложение</p>
                            <img className="portfolio__link-arrow" src={arrowLink} alt="Стрелка для ссылки" />
                        </a>
                    </li>
                </ul>
            </Blank>
        </section>
    )
}