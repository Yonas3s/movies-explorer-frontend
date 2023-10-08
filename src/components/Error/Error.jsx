import { Link, useNavigate } from "react-router-dom";
import "./Error.css";

export default function Error() {
    const navigate = useNavigate();
    return(
        <section className="error__page">
            <h2 className="error__title">404</h2>
            <p className="error__subtitle">Страница не найдена</p>
            <Link onClick={() => navigate(-1)} className="error__link" href="www.yandex.ru">Назад</Link>
        </section>
    )
}