/* eslint-disable react/self-closing-comp */
import React from 'react';
import Logo from './Logo';
import fb from '../../img/fb.svg';
import tw from '../../img/tw.svg';
import In from '../../img/in.svg';
import google from '../../img/google.svg';
import youtube from '../../img/youtube.svg';

export default function Footer() {
   return (
      <footer className="footer">
         <div className="container footer__container">
            <div className="footer__contacts">
               <div id="contacts" className="contacts__section">
                  <h4 className="footer__title">Свяжитесь с нами</h4>
                  <ul className="contacts__list">
                     <li className="contact">
                        <div className="contact__icon icon-phone"></div>
                        <p className="contact__text">8(800)000 00 00</p>
                     </li>
                     <li className="contact">
                        <div className="contact__icon icon-mail"></div>
                        <p className="contact__text">inbox@mail.ru</p>
                     </li>
                     <li className="contact">
                        <div className="contact__icon icon-skype"></div>
                        <p className="contact__text">tu.train.tickets</p>
                     </li>
                     <li className="contact">
                        <div className="contact__icon icon-location"></div>
                        <p className="contact__text">
                           г. Москва ул. Московская 27-35 555 555
                        </p>
                     </li>
                  </ul>
               </div>

               <div className="footer__subscribe">
                  <h4 className="footer__title">Подписка</h4>
                  <form className="subscribe__form">
                     <label>Будьте в курсе событий</label>
                     <input className="subscribe__input" placeholder="e-mail" />
                     <button type="button" className="subscribe__btn">
                        Отправить
                     </button>
                  </form>
                  <h4 className="footer__title">Подписывайся на нас</h4>
                  <ul className="socials">
                     <li className="social youtube">
                        <a href="#" className="social-link">

                        </a>
                     </li>
                     <li className="social in">
                        <a href="#" className="social-link">

                        </a>
                     </li>
                     <li className="social google">
                        <a href="#" className="social-link">

                        </a>
                     </li>
                     <li className="social facebook">
                        <a href="#" className="social-link">

                        </a>
                     </li>
                     <li className="social twitter">
                        <a href="#" className="social-link">
                           
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer__footer">
            <div className="container footer__logo">
               <Logo />
               <div className="arrow" />

               <div className="terms">2018 WEB</div>
            </div>
         </div>
      </footer>
   );
}
