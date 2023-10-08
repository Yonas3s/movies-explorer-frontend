import "./NavTab.css"

export default function NavTab() {
    return (
        <section className="navtab__container">
            <div className="navtab__links">
                <a href="#aboutproject" className="navtab__link">О проекте</a>
                <a href="#techs" className="navtab__link">Технологии</a>
                <a href="#aboutme" className="navtab__link">Студент</a>
            </div>
        </section>
    )
}