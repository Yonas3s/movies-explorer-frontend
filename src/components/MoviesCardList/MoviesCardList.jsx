import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import useWindowDimensions from "../../utils/useWindowDimensions/useWindowDimension";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
    movies,
    onDelete,
    savedMovies,
    addMovie,
    isLoading,
    serverError,
    firstEntrance
}) {
    const { width } = useWindowDimensions();
    const [displayedMovies, setDisplayedMovies] = useState(0);
    const { pathname } = useLocation();
    const fact = movies.slice(0, displayedMovies);

    function defaultDisplayedMore() {
        if (width > 1023) {
            setDisplayedMovies(12);
        } else if (width < 1023) {
            setDisplayedMovies(5);
        }
    }

    function showMore() {
        if (width > 1180) {
            setDisplayedMovies(displayedMovies + 3);
        } else if (width > 1023) {
            setDisplayedMovies(displayedMovies + 2);
        } else if (width < 1023) {
            setDisplayedMovies(displayedMovies + 2);
        }
    }

    useEffect(() => {
        defaultDisplayedMore();
    }, []);

    return (
        <section className="movieslist">
            <ul className="movieslist__container">
                {/* { === false ? movies.slice(0, displayedMovies).map((data) => {
                    return (<MoviesCard liked={liked} movies={data} onLike={onLike} onDelete={onDelete} savedMovies={savedMovies}
                    />)
                }) : movies.map((data) => {
                    return (<MoviesCard liked={liked} movies={data} onLike={onLike} onDelete={onDelete} savedMovies={savedMovies}
                    />)
                })} */}
                {isLoading ? <Preloader /> :
                    (pathname === '/movies' && fact.length !== 0) ?
                        movies.slice(0, displayedMovies).map(data => {
                            return (
                                <MoviesCard
                                    key={data.id}
                                    savedMovies={savedMovies}
                                    addMovie={addMovie}
                                    data={data}
                                />
                            )
                        })
                        : movies.length !== 0 ?
                            movies.map(data => {
                                return (
                                    <MoviesCard
                                        key={data._id}
                                        onDelete={onDelete}
                                        // savedMovies={savedMovies}
                                        data={data}
                                    />
                                )
                            })
                            : serverError ?
                                <span className='gallery__serch-error'>«Во время запроса произошла ошибка.
                                    Возможно, проблема с соединением или сервер недоступен.
                                    Подождите немного и попробуйте ещё раз»
                                </span>
                                : !firstEntrance ?
                                    <span className='gallery__serch-error'>«Ничего не найдено»</span>
                                    : pathname === '/movies' ?
                                        <span className='gallery__serch-error'>«Чтобы увидеть список фильмоа выполните поиск»</span>
                                        :
                                        <span className='gallery__serch-error'>«Нет сохранённых фильмов»</span>

                }
            </ul>
            {movies.length > displayedMovies ? (
                <button type="button" className='movieslist__button' onClick={showMore}>Еще</button>
            ) : ('')}
        </section>
    )

}