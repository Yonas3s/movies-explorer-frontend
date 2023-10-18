import React, { useState } from 'react';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';
import iconAccountWhite from "../../../images/icon-account-white.svg";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  };

  return (
    <nav className='burgermenu'>
      <div className="burgermenu__container">
        <button type='button' className="burgermenu__button" onClick={toggleMenu} />
      </div>
      <nav className={`burgermenu__options ${isOpen ? 'burgermenu__options-opened' : ''}`}>
        <ul className='burgermenu__options-list'>
          <li className="burgermenu__option">
            <Link className='burgermenu__option-link burgermenu__option-link-active' onClick={toggleMenu} to={'/'}>Главная</Link>
          </li>
          <li className="burgermenu__option">
            <Link className='burgermenu__option-link' onClick={toggleMenu} to={'/movies'}>Фильмы</Link>
          </li>
          <li className="burgermenu__option">
            <Link className='burgermenu__option-link' onClick={toggleMenu} to={'/saved-movies'}>Сохраненные фильмы</Link>
          </li>
          <li className="burgermenu__option">
            <Link to={'/profile'} onClick={toggleMenu} className="burgermenu__option-link burgermenu__option-link-light">Аккаунт</Link>
            <img src={iconAccountWhite} alt="Иконка аккаунта" />
          </li>
        </ul>
        <button type='button' className='burgermenu__close' onClick={toggleMenu} />
      </nav>
    </nav>
  );
};

export default BurgerMenu;