import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesMain from "../MovieMain/MoviesMain";
import SavedMovies from "../SavedMovies/SavedMovies";

export default function Main({
    name,
    onLogin,
    onRegister,
    loggedIn,
    onUpdateInfo,
    signOut,
    onDelete,
    savedMovies,
    addMovie,
    isEdit
}) {
    return (
        <main className="main">
            {{
                main:
                    <>
                        <Header loggedIn={loggedIn} location={name} />
                        <Promo />
                        <NavTab />
                        <AboutProject />
                        <Techs />
                        <AboutMe />
                        <Portfolio />
                        <Footer />
                    </>,
                signin: <Login onLogin={onLogin} />,
                signup: <Register onRegister={onRegister} />,
                error: <Error />,
                profile:
                    <>
                        <Header loggedIn={loggedIn} location={name} />
                        <Profile onUpdateInfo={onUpdateInfo} signOut={signOut} />
                    </>,
                movies:
                    <>
                        <Header loggedIn={loggedIn} location={name} />
                        <MoviesMain savedMovies={savedMovies} addMovie={addMovie} />
                        <Footer />
                    </>,
                savedmovies:
                    <>
                        <Header loggedIn={loggedIn} location={name} />
                        <SavedMovies onDelete={onDelete} savedMovies={savedMovies} />
                        <Footer />
                    </>
            }[name]}
        </main>
    )
}