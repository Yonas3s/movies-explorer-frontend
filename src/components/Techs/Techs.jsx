import Blank from "../Blank/Blank"
import "./Techs.css"

export default function Techs() {
    return (
        <section className="techs__container" id="techs">
            <Blank>
                <h2 className="techs__title">Технологии</h2>
                <div className="techs__wrapper">
                    <h3 className="techs__subtitle">7 технологий</h3>
                    <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <ul className="techs__list">
                    <li className="techs__list-block">HTML</li>
                    <li className="techs__list-block">CSS</li>
                    <li className="techs__list-block">JS</li>
                    <li className="techs__list-block">React</li>
                    <li className="techs__list-block">Git</li>
                    <li className="techs__list-block">Express.js</li>
                    <li className="techs__list-block">mongoDB</li>
                </ul>
            </Blank>
        </section>
    )
}