import "./MoviesCard.css";
import moviePic from "../../images/movie-pic.png";

export default function MoviesCard({ liked }) {
    return (
        <div className="movie__container">
            {liked === false ? <button className="movie__save">Сохранить</button> : <button className="movie__save-liked" />}
            <img src={moviePic} className="movies__photo" alt="Превью фильма"></img>
            <div className="movie__description">
                <p className="movie__title">33 слова о дизайне</p>
                <p className="movie__time">1ч 17м</p>
            </div>
        </div>
    )
}