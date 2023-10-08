import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Blank from "../Blank/Blank";

export default function SearchForm() {
    console.log(window.innerWidth)
    return (
        <section className="search__page">
            <Blank>
                {window.innerWidth > '360' ? (
                    <div className="search__container">
                        <form className="search__form">
                            <img src={searchIcon} alt="Иконка поиска" className="search__icon" />
                            <input type="text" className="search__form-input" placeholder="Фильм" />
                            <button type="submit" className="search__form-submit">Найти</button>
                        </form>
                        <FilterCheckbox noBorder={false}/>
                    </div>
                ) : (
                    <>
                        <div className="search__container">
                            <form className="search__form">
                                <img src={searchIcon} alt="Иконка поиска" className="search__icon" />
                                <input type="text" className="search__form-input" placeholder="Фильм" />
                                <button type="submit" className="search__form-submit">Найти</button>
                            </form>
                        </div>
                        <FilterCheckbox noBorder={true}/>
                    </>
                )}
            </Blank>
        </section>
    )
}