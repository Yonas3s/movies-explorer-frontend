import "./MoviesCard.css";
import moviePic from "../../images/movie-pic.png";

export default function MoviesCard({ liked, name }) {
    return (
        <li className="movie">
            {liked === false ? <button type='button' className="movie__save">Сохранить</button> : <button type='button' className="movie__save-liked" />}
            <img src={moviePic} className="movie__photo" alt={name} />
            <div className="movie__description">
                <h2 className="movie__title">33 слова о дизайне</h2>
                <p className="movie__time">1ч 17м</p>
            </div>
        </li>
    )
}