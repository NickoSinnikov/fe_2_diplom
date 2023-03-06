import { useNavigate } from "react-router";

import HeaderFormDirection from "./SearchFormDirection";
import HeaderFormDate from "./SearchFormDate";
import Button from "./Button";

export default function HomePageForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    navigate("/tickets/");
  };

  return (
    <section className="home-page-title">
      <div className="home-page-title-block container">
        <h1 className="home-page__title">
          Вся жизнь -
          <span className="header__title-bold">
            <br />
            путешествие!
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="search-form search-form-main">
          <div className="form-item form-item-column">
            <HeaderFormDirection>Направление</HeaderFormDirection>
            <HeaderFormDate>Дата</HeaderFormDate>
          </div>
          <Button type="submit" className="btn-search">
            Найти билеты
          </Button>
        </form>
      </div>
    </section>
  );
}
