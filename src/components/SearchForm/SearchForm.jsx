import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions/useWindowDimension";
import useFormValidation from "../../utils/useFormValidation";
import { useLocation } from "react-router-dom";

export default function SearchForm({ isCheck, changeShort, searchedMovie, searchMovies, setIsError, firstEntrance, savedMovies, }) {
    // const { values, errors, isInputValid, isValid, handleChange, reset} = useFormValidation()
    const [bigWidth, setBigWidth] = useState(); 
    const { width } = useWindowDimensions();
        const { pathname } = useLocation()
    // const isError = useContext(ErrorContext)
    const { values, handleChange, reset } = useFormValidation()

    useEffect(() => {
        if (width > '600') {
            setBigWidth(true);
        } else {
            setBigWidth(false);
        }
    }, [width])

    useEffect(() => {
        if ((pathname === '/saved-movies' && savedMovies.length === 0)) {
            reset({ search: '' })
        } else {
            reset({ search: searchedMovie })
        }
        setIsError(false)
    }, [searchedMovie, reset, setIsError, pathname, savedMovies])

    // searchedMovie, reset, setIsError, pathname, savedMovies

    function onSubmit(evt) {
        evt.preventDefault()
        if (evt.target.search.value) {
            searchMovies(evt.target.search.value)
            setIsError(false)
        } else {
            setIsError(true)
        }
    }

    return (
        <nav className="search">
            <form className="search__form" name={'SearchForm'} onSubmit={onSubmit}>
                {bigWidth ? (
                    <div className="search__container">
                        <img src={searchIcon} alt="Иконка поиска" className="search__icon" />
                        <input type="text" name='search' className="search__form-input" placeholder="Фильм" value={values.search || ''}
                            onChange={(evt) => {
                                handleChange(evt)
                                setIsError(false)
                            }} 
                            disabled={savedMovies ? (savedMovies.length === 0 && true) : false}
                            required
                            />
                        <button type="submit" className="search__form-submit">Найти</button>
                        <FilterCheckbox isCheck={isCheck} changeShort={changeShort} firstEntrance={firstEntrance}/>
                    </div>
                ) : (
                    <>
                        <div className="search__container">
                            <input type="text" name='search' className="search__form-input" placeholder="Фильм" value={values.search || ''}
                                onChange={(evt) => {
                                    handleChange(evt)
                                    setIsError(false)
                                }} 
                                disabled={savedMovies ? (savedMovies.length === 0 && true) : false}
                                required
                                />
                            <button type="submit" className="search__form-submit">Найти</button>
                        </div>
                        <FilterCheckbox isCheck={isCheck} changeShort={changeShort} firstEntrance={firstEntrance}/>
                    </>
                )}
            </form>
        </nav>
    )
}