import { Route, Routes, useLocation, useNavigate, useNavigation } from 'react-router-dom';
// import Footer from '../Footer/Footer.jsx';
// import Header from '../Header/Header.jsx';
import './App.css';
import Main from '../Main/Main.jsx';
import ProtectedRoute from '../ProtectedRoute.jsx/ProtectedRoute.jsx';
import { useCallback, useEffect, useState } from 'react';
import apiMain from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import apiMovies from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState({});
  // const [isSuccess, setIsSuccess] = useState('');
  const [isUpdate, setIsUpdate] = useState('');
  // const [movies, setMovies] = useState([]);
  // const [liked, setLiked] = useState(false);
  // const [savedMovies, setSavedMovies] = useState([]);


  // const navigate = useNavigate();

  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [isSend, setIsSend] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [savedMovies, setSavedMovies] = useState([])
  const [isError, setIsError] = useState(false)
  const [isCheckToken, setIsCheckToken] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([apiMain.getUserInfo(localStorage.jwt), apiMain.getMovies(localStorage.jwt)])
        .then(([userData, dataMovies]) => {
          setSavedMovies(dataMovies.reverse())
          setCurrentUser(userData)
          setLoggedIn(true)
          setIsCheckToken(false)
          // console.log(dataMovies)
        })
        .catch((err) => {
          console.error(`Ошибка при загрузке начальных данных ${err}`)
          setIsCheckToken(false)
          localStorage.clear()
        })
    } else {
      setLoggedIn(false)
      setIsCheckToken(false)
      localStorage.clear()
    }
  }, [loggedIn])

  function handleSubmitLogin({ email, password }) {
    setIsSend(true)
    apiMain
      .login(email, password)
      .then((data) => {
        if (data) {
          setCurrentUser(data);
          setLoggedIn(true);
          localStorage.setItem('jwt', data.token);
          navigate("/movies", { replace: true });
          // setCurrentUser(data)
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsError(true)
      })
      .finally(() => {
        // setIsLoading(false);
        setIsSend(false)
      });
  }

  function handleSubmitRegister({ name, email, password }) {
    setIsSend(true)
    apiMain
      .createUser(name, email, password)
      .then((data) => {
        handleSubmitLogin({ email, password });
        setCurrentUser(data);
        localStorage.setItem('jwt', data.token);
        setIsUpdate(true);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsError(true)
        console.log(err);
      })
  }

  function handleUpdateUser(username, email) {
    // setIsLoading(true);
    apiMain
      .editUserInfo(username, email, localStorage.jwt)
      .then((data) => {
        setIsUpdate(true);
        setCurrentUser(data);
        setIsSuccess(true);
        // console.log(data)
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }

  const toggleMenu = () => {
    if (isUpdate) {
      setIsUpdate(false)
    } else {
      setIsSuccess(true)
    }
  };

  // const setSuccess = useCallback(() => {
  //   setIsSuccess(false)
  // }, [])
  // https://api.yonasss-movies-diplom.nomoredomainsicu.ru/movies/652ef5c513da3592325e81e9
  function handleDeleteMovie(deletemovieId) {
    console.log(localStorage.jwt)
    console.log(deletemovieId)
    apiMain.deleteMovie('652ef5c513da3592325e81e', localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter(data => { return data._id !== deletemovieId }))
      })
      .catch((err) => console.error(`${err}`))
  }

  function handleToggelMovie(data) {
    const isAdd = savedMovies.some(element => data.id === element.movieId)
    const seachClickMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isAdd) {
      handleDeleteMovie(seachClickMovie[0]._id)
    } else {
      apiMain.addMovie(data, localStorage.jwt)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((err) => console.error(`Ошибка при установке лайка ${err}`))
    }
  }

  function handleSignOut() {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route path='signup' element={
            <Main name='signup' onRegister={handleSubmitRegister} />
          } />
          <Route path='signin' element={
            <Main name='signin' onLogin={handleSubmitLogin} />
          } />
          <Route path='/' element={
            <Main name='main' loggedIn={loggedIn} />
          } />
          <Route path='/movies' element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Main}
              name='movies'
              // movies={movies}
              // onSearch={searchQuery}
              // setOnSearch={setSearchQuery}
              // searchMovies={filteredMovies}
              // onCheck={isClick}
              // onClickSearch={handleClickSearch}
              // liked={liked}
              // onLike={handleLikeClick}
              // onDelete={handleCardDelete}
              // savedMovies={savedMovies}
              savedMovies={savedMovies}
              addMovie={handleToggelMovie}
              setIsError={setIsError}
            />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Main}
              name='savedmovies'
              // liked={liked}
              // onLike={handleLikeClick}
              onDelete={handleDeleteMovie}
              savedMovies={savedMovies}
              setIsError={setIsError}
            />
          } />
          <Route path='/profile' element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Main}
              name='profile'
              onUpdateInfo={handleUpdateUser}
              signOut={handleSignOut}
            />
          } />
          <Route path='*' element={
            <>
              <Main name='error' />
            </>
          } />
        </Routes>
        <InfoTooltip isSuccess={isSuccess} isUpdate={isUpdate} onClose={toggleMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
