import logo from './img/logo.svg';
import './App.css';
import './css/header.css';
import './css/main-section.css';
import './css/footer.css';
import firstImg from './img/working-list__first.svg';
import secondImg from './img/working-list__second.svg';
import thirdImg from './img/working-list__third.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header__logo container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="header__menu">
          <ul className="menu__list container">
            <li className="menu__item">
              <a href="#about">О нас</a>
            </li>
            <li className="menu__item">Как это работает</li>
            <li className="menu__item">Отзывы</li>
            <li className="menu__item">Контакты</li>
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
            <div className="form-block">
              <label className="form__lable">Направление</label>
              <div className="input-block">
                <input className="form__input" />
                <button className="btn-swap">Swap</button>
                <input className="form__input" />
              </div>
            </div>
            <div className="form-block">
              <label className="form__lable">Дата</label>
              <div className="input-block">
                <input className="form__input" />
                <input className="form__input" />
              </div>
            </div>
            <button className="header__btn">Найти билеты</button>
          </form>
        </div>
      </header>
      <main className="main">
        <section id="about" className="section-about">
          <div className="container section__container">
            <h2 className="section__title">О нас</h2>
            <div className="section__text">
              <p>
                Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
                наблюдаем, как с каждым днем все больше людей заказывают жд
                билеты через интернет.
              </p>
              <p>
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                клика, но стоит ли это делать? Мы расскажем о преимуществах
                заказа через интернет.
              </p>
              <p className="section__text-bold">
                Покупать жд билеты дешево можно за 90 суток до отправления
                поезда. Благодаря динамическому ценообразованию цена на билеты в
                это время самая низкая.
              </p>
            </div>
          </div>
        </section>
        <section className="section__working">
          <div className="container working__container">
            <div className="section__header">
              <h2 className="section__title section__title-white">
                Как это работает
              </h2>
              <button className="section__button working__btn">
                Узнать больше
              </button>
            </div>

            <ul className="working__list">
              <li className="list__item">
                <div className="item__image">
                  <img src={firstImg} />
                </div>
                <div className="item__text">Удобный заказ на сайте</div>
              </li>
              <li className="list__item">
                <div className="item__image">
                  <img src={secondImg} />
                </div>
                <div className="item__text">Нет необходимости ехать в офис</div>
              </li>
              <li className="list__item">
                <div className="item__image">
                  <img src={thirdImg} />
                </div>
                <div className="item__text">Огромный выбор направлений</div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section__reviews">
          <div className="container">
            <h2 className="section__title">Отзывы</h2>
            <ul className="reviews">
              <li className="review">
                <div className="review__image">
                  <img src="" />
                </div>
                <div className="review__content">
                  <h4 className="review__author">Екатерина Вальнова</h4>
                  <p className="review__text">
                    <span className="quotes">“</span>Доброжелательные подсказки
                    на всех этапах помогут правильно заполнить поля и без
                    затруднений купить авиа или ж/д билет, даже если вы
                    заказываете онлайн билет впервые.
                    <span className="quotes">”</span>
                  </p>
                </div>
              </li>
              <li className="review">
                <div className="review__image">
                  <img src="" />
                </div>
                <div className="review__content">
                  <h4 className="review__author">Евгений Стрыкало</h4>
                  <p className="review__text">
                    <span className="quotes">“</span>СМС-сопровождение до
                    посадки Сразу после оплаты ж/д билетов и за 3 часа до
                    отправления мы пришлем вам СМС-напоминание о поездке.
                    <span className="quotes">”</span>
                  </p>
                </div>
              </li>
            </ul>
            <ul className="reviews__nav">
              <li className="reviews__circle reviews__circle-active"></li>
              <li className="reviews__circle "></li>
              <li className="reviews__circle"></li>
              <li className="reviews__circle "></li>
              <li className="reviews__circle "></li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__contacts">
            <div className="contacts__section">
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
                <button className="subscribe__btn">Отправить</button>
              </form>
              <h4 className="footer__title">Подписывайся на нас</h4>
              <ul className="socials">
                <li className="social">
                  <img src="" />
                </li>
                <li className="social">
                  <img src="" />
                </li>
                <li className="social">
                  <img src="" />
                </li>
                <li className="social">
                  <img src="" />
                </li>
                <li className="social">
                  <img src="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__footer">
          <div className="container footer__logo">
            <img src={logo} />
            <div className="arrow" />

            <div className="terms">2018 WEB</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
