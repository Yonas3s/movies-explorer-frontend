import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
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
    setIsError,
    isSuccess,
    setSuccess,
    setIsEdit,
    isEdit
}) {
    console.log(savedMovies)
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
                        <Profile onUpdateInfo={onUpdateInfo} signOut={signOut} isEdit={isEdit} />
                    </>,
                movies:
                    <>
                        <Header loggedIn={loggedIn} location={name} />
                        {/* <SearchForm onSearch={onSearch} setOnSearch={setOnSearch} onClickSearch={onClickSearch} />
                        <MoviesCardList movies={movies} onCheck={onCheck} searchMovies={searchMovies} liked={liked} onLike={onLike} onDelete={onDelete} savedMovies={savedMovies} addMovie={addMovie}/> */}
                        <MoviesMain savedMovies={savedMovies} addMovie={addMovie} setIsError={setIsError}/>
                        <Footer />
                    </>,
                savedmovies:
                    <>
                        <Header loggedIn={loggedIn} location={name} />
                        {/* <SearchForm />
                        <MoviesCardList onDelete={onDelete} savedMovies={savedMovies} setIsError={setIsError}/> */}
                        <SavedMovies onDelete={onDelete} savedMovies={savedMovies} setIsError={setIsError}/>
                        <Footer />
                    </>
            }[name]}
        </main>
    )
}