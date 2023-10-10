import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList() {
    return (
        <section className="movieslist__wrapper">
                <ul className="movieslist__container">
                    <MoviesCard liked={true} />
                    <MoviesCard liked={false} />
                    <MoviesCard liked={false} />
                    <MoviesCard liked={false} />
                    <MoviesCard liked={false} />
                    <MoviesCard liked={true} />
                </ul>
        </section>
    )
}