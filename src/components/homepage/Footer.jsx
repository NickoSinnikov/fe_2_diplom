/* eslint-disable react/self-closing-comp */
import React from 'react';
import Logo from './Logo';

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
                     <button type="button" className="subscribe__btn">Отправить</button>
                  </form>
                  <h4 className="footer__title">Подписывайся на нас</h4>
                  <ul className="socials">
                     <li className="social">
                        <img src="" alt='alt'/>
                     </li>
                     <li className="social">
                        <img src="" alt='alt'/>
                     </li>
                     <li className="social">
                        <img src="" alt='alt'/>
                     </li>
                     <li className="social">
                        <img src="" alt='alt'/>
                     </li>
                     <li className="social">
                        <img src="" alt='alt'/>
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
