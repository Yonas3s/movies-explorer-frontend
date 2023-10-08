import Blank from "../Blank/Blank"
import "./Techs.css"

export default function Techs() {
    return (
        <section className="techs__container" id="techs">
            <Blank>
                <h2 className="techs__title">Технологии</h2>
                <div>
                    <h3 className="techs__subtitle">7 технологий</h3>
                    <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <div className="techs__list">
                    <p className="techs__list-block">HTML</p>
                    <p className="techs__list-block">CSS</p>
                    <p className="techs__list-block">JS</p>
                    <p className="techs__list-block">React</p>
                    <p className="techs__list-block">Git</p>
                    <p className="techs__list-block">Express.js</p>
                    <p className="techs__list-block">mongoDB</p>
                </div>
            </Blank>
        </section>
    )
}