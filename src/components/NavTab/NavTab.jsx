import "./NavTab.css"

export default function NavTab() {
    return (
        <nav className="navtab">
            <ul className="navtab__container">
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
        </nav>
    )
}