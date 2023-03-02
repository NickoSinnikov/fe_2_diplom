import HeaderFormDirection from "./HeaderFormDirection";
import HeaderFormDate from "./HeaderFormDate";
import Button from "./Button";

export default function HomePageForm() {
  return (
    <section className="home-page-form">
      <div className="form-block container">
        <h1 className="header__title">
          Вся жизнь -
          <span className="header__title-bold">
            <br />
            путешествие!
          </span>
        </h1>

        <form className="search__form">
          <HeaderFormDirection>YНаправление</HeaderFormDirection>
          <HeaderFormDate>Дата</HeaderFormDate>
          <Button className="btn-search">Найти билеты</Button>
        </form>
      </div>
    </section>
  );
}
