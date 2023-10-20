import "./MoviesCard.css";
import { durationConverter } from "../../utils/durationConvertor";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ addMovie, onDelete, data, savedMovies }) {
    const { pathname } = useLocation()
    const [click, setClick] = useState(false)

    function onClick() {
        if (savedMovies.some(element => data._id === element.movieId)) {
            setClick(true)
            addMovie(data)
        } else {
            setClick(false)
            addMovie(data)
        }
    }

    useEffect(() => {
        if (pathname === '/movies')
            setClick(savedMovies.some(element => data.id === element.movieId))
    }, [savedMovies, data.id, setClick, pathname])
    
    return (
        <li className="movie">
            {pathname === '/movies' ? <button type='button' className={`movie__save ${click ? 'movie__save-liked' : ''}`} onClick={onClick} value={'Сохранить'}>{click ? '' : 'Сохранить'}</button> : <button type='button' className="movie__save-delete" onClick={() => onDelete(data._id)} />}
            <a href={data.trailerLink} target='blank'><img src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} className="movie__photo" alt={data.name} /></a>
            <div className="movie__description">
                <h2 className="movie__title">{data.nameRU}</h2> 
                <p className="movie__time">{data.duration >= '60' ? (durationConverter(data.duration)) : (`${data.duration}м`)}</p>
            </div>
        </li>
    )
}