import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.jsx';
import ProtectedRoute from '../ProtectedRoute.jsx/ProtectedRoute.jsx';
import { useEffect, useState } from 'react';
import apiMain from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from '../Preloader/Preloader';

function App() {
  const [isUpdate, setIsUpdate] = useState('');
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [savedMovies, setSavedMovies] = useState([])
  const [isCheckToken, setIsCheckToken] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([apiMain.getUserInfo(), apiMain.getMovies()])
        .then(([userData, dataMovies]) => {
          setSavedMovies(dataMovies)
          setCurrentUser(userData)
          console.log(dataMovies)
          setLoggedIn(true)
          setIsCheckToken(false)
        })
        .catch((err) => {
          console.error(err)
          setIsCheckToken(false)
          localStorage.clear()
        })
    } else {
      setLoggedIn(false)
      setIsCheckToken(false)
      localStorage.clear()
    }
  }, [loggedIn])


  function handleSubmitLogin(email, password) {
    apiMain.login(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        setLoggedIn(true)
        navigate('/movies')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function handleSubmitRegister(username, email, password) {
    apiMain.createUser(username, email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(false)
          apiMain.login(email, password)
            .then(res => {
              localStorage.setItem('jwt', res.token)
              setLoggedIn(true)
              navigate('/movies')
              window.scrollTo(0, 0)
            })
            .catch((err) => {
              console.error(err)
            })
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function handleUpdateUser(username, email) {
    apiMain
      .editUserInfo(username, email, localStorage.jwt)
      .then((data) => {
        setIsUpdate(true);
        setCurrentUser(data);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
      });
  }

  const toggleMenu = () => {
    if (isUpdate) {
      setIsUpdate(false)
    } else {
      setIsSuccess(true)
    }
  };

  function handleDeleteMovie(deletemovieId) {
    console.log(localStorage.jwt)
    console.log(deletemovieId)
    apiMain.deleteMovie(deletemovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter(data => { return data._id !== deletemovieId }))
      })
      .catch((err) => console.error(`${err}`))
  }

  function handleToggelMovie(data) {
    console.log(savedMovies)
    const isAdd = savedMovies.some(element => data.id === element.movieId)
    const seachClickMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isAdd) {
      handleDeleteMovie(seachClickMovie[0]._id)
    } else {
      apiMain.addMovie(data)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((err) => console.error(err))
    }
  }

  function handleSignOut() {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <div className='page'>
      {isCheckToken ? <Preloader /> : <CurrentUserContext.Provider value={currentUser}>
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
              savedMovies={savedMovies}
              addMovie={handleToggelMovie}
            />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Main}
              name='savedmovies'
              onDelete={handleDeleteMovie}
              savedMovies={savedMovies}
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
      </CurrentUserContext.Provider >}
    </div>
  );
}

export default App;
