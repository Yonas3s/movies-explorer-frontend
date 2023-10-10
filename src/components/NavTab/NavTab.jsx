import "./NavTab.css"

export default function NavTab() {
    return (
        <section className="navtab__container">
            <ul className="navtab__lists">
                <li className="navtab__list">
                    <a href="#aboutproject" className="navtab__link">О проекте</a>
                </li>
                <li className="navtab__list">
                    <a href="#techs" className="navtab__link">Технологии</a>
                </li>
                <li className="navtab__list">
                    <a href="#aboutme" className="navtab__link">Студент</a>
                </li>
            </ul>
        </section>
    )
}