import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import './App.css';
import Main from '../../Main/Main.jsx';

function App() {
  return (
    <div className='root__page'>
      {/* <Header loggenIn={true} /> */}
      {/* <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio /> */}
      {/* <SearchForm />
      <MoviesCardList /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Footer /> */}
      {/* <Error /> */}
      <Routes>
        <Route path='signup' element={
          <Main name='signup' />
        } />
        <Route path='signin' element={
          <Main name='signin' />
        } />
        <Route path='/profile' element={
          <>
            <Header />
            <Main name='profile' />
          </>
        } />
        <Route path='/' element={
          <>
            <Header  name='main' loggenIn={true}/>
            <Main name='main' />
            <Footer />
          </>
        } />
        <Route path='/movies' element={
          <>
            <Header />
            <Main name='movies' />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <Header />
            <Main name='savedmovies' />
            <Footer />
          </>
        } />
        <Route path='*' element={
          <>
            <Main name='error' />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
