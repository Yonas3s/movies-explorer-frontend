import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList() {
    return (
        <section className="movieslist">
                <ul className="movieslist__container">
                    <MoviesCard liked={true} name={'33 слова о дизайне'}/>
                    <MoviesCard liked={false} name={'33 слова о дизайне'}/>
                    <MoviesCard liked={false} name={'33 слова о дизайне'}/>
                    <MoviesCard liked={false} name={'33 слова о дизайне'}/>
                    <MoviesCard liked={false} name={'33 слова о дизайне'}/>
                    <MoviesCard liked={true} name={'33 слова о дизайне'}/>
                </ul>
        </section>
    )
}