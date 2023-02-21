import React from "react";
import MenuItem from './MenuItem';
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="App-header">
      <div className="header__logo container">
        <Logo/>
      </div>
      <div className="header__menu">
        <ul className="menu__list container">
          <MenuItem className="menu__item" href="#about">
            О нас
          </MenuItem>
          <MenuItem className="menu__item" href="#working">
            Как это работает
          </MenuItem>
          <MenuItem className="menu__item" href="#reviews">
            Отзывы
          </MenuItem>
          <MenuItem className="menu__item" href="#contacts">
            Контакты
          </MenuItem>
        </ul>
      </div>
      <div className="header__block container">
        <h1 className="header__title">
          Вся жизнь -
          <span className="header__title-bold">
            <br />
            путешествие!
          </span>
        </h1>
        <form className="search__form">
         
          <button className="header__btn">Найти билеты</button>
        </form>
      </div>
    </header>
  );
}
