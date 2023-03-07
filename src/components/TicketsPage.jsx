import Aside from "./Aside/Aside";
import Tickets from "./Tickets";
import "../css/tickets-page.css";
import SearchFormDirection from "./SearchFormDirection";
import SearchFormDate from "./SearchFormDate";
import Button from "./Button";

export default function TicketsPage() {
  return (
    <div className="tickets-page ">
      <section className="search-form__section ">
        <div className="container">
          <form className="search-form search-form-tickets">
            <div className="form-item form-item-row">
              <SearchFormDirection>Направление</SearchFormDirection>
              <SearchFormDate>Дата</SearchFormDate>
            </div>
            <Button type="submit" className="btn-search">
              Найти билеты
            </Button>
          </form>
        </div>
      </section>
      <div className="container">
        <Aside />
        <Tickets />
      </div>
    </div>
  );
}
