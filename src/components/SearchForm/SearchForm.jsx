import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions/useWindowDimension";

export default function SearchForm() {
    const [bigWidth, setBigWidth] = useState(); 
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width > '600') {
            setBigWidth(true);
        } else {
            setBigWidth(false);
        }
    }, [width])

    return (
        <section className="search__page">
            {/* <Blank> */}
                <form className="search__form">
                    {bigWidth ? (
                        <div className="search__container">
                            <img src={searchIcon} alt="Иконка поиска" className="search__icon" />
                            <input type="text" className="search__form-input" placeholder="Фильм" />
                            <button type="submit" className="search__form-submit">Найти</button>
                            <FilterCheckbox />
                        </div>
                    ) : (
                        <>
                            <div className="search__container">
                                <input type="text" className="search__form-input" placeholder="Фильм" />
                                <button type="submit" className="search__form-submit">Найти</button>
                            </div>
                            <FilterCheckbox />
                        </>
                    )}
                </form>
            {/* </Blank> */}
        </section>
    )
}