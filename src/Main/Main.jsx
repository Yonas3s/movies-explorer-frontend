import Promo from "../components/Promo/Promo";
import AboutProject from "../components/AboutProject/AboutProject";
import Techs from "../components/Techs/Techs";
import AboutMe from "../components/AboutMe/AboutMe";
import Portfolio from "../components/Portfolio/Portfolio";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";
import Profile from "../components/Profile/Profile";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import NavTab from "../components/NavTab/NavTab";

export default function Main({ name }) {
    return (
        <main className="main">
            {{
                main:
                    <>
                        <Promo />
                        <NavTab />
                        <AboutProject />
                        <Techs />
                        <AboutMe />
                        <Portfolio />
                    </>,
                signin: <Login name={name} />,
                signup: <Register name={name} />,
                error: <Error />,
                profile: <Profile name={name} />,
                movies:
                    <>
                        <SearchForm />
                        <MoviesCardList />
                    </>,
                savedmovies:
                    <>
                        <SearchForm />
                        <MoviesCardList />
                    </>
            }[name]}
        </main>
    )
}