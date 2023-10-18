import Blank from "../Blank/Blank"
import "./AboutProject.css"

export default function AboutProject() {
    return (
        <section className="aboutproject" id="aboutproject">
            <Blank>
                <h2 className="aboutproject__title">О проекте</h2>
                <div className="aboutproject__info">
                    <h3 className="aboutproject__info-title">Дипломный проект включал 5 этапов</h3>
                    <h3 className="aboutproject__info-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutproject__info-description">Составление плана, работу над бэкендом, верстку, добавление функциональности и финальные доработки.</p>
                    <p className="aboutproject__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className="aboutproject__time">
                    <p className="aboutproject__time-block">1 неделя</p>
                    <p className="aboutproject__time-block">4 неделя</p>
                    <p className="aboutproject__time-block">Back-end</p>
                    <p className="aboutproject__time-block">Front-end</p>
                </div>
            </Blank>
        </section>
    )
}