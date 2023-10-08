import Blank from "../Blank/Blank";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <Blank>
                <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__container">
                    <div className="footer__container-links">
                        <a className="footer__container-link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                        <a className="footer__container-link" href="https://github.com/Yonas3s" target="blank">Github</a>
                    </div>
                    <p className="footer__year">©2023</p>
                </div>
            </Blank>
        </footer>
    )
}