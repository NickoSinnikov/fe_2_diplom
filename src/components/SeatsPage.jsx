import Button from './Button';
import SearchFormDate from './Forms/SearchFormDate';
import SearchFormDirection from './Forms/SearchFormDirection';

export default function SeatsPage() {
  return (
    <main className="tickets-page ">
      <section className="search-form__section ">
        <div className="container">
          <form className="search-form search-form-tickets" onSubmit={onSubmit}>
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
      <div className="container train-content__block">
        <section className="seats order_options">
          <h3 className="title seats_title">Выбор мест</h3>
          {/* {train.departure && (
        <Ticket type="departure" className="ticket_header-train" />
      )}
      {train.arrival && (
        <Ticket type="arrival" className="ticket_header-train" />
      )} */}
          <div className="seats_buttons">
            <button
              type="button"
              className="button seats_button"
              //   onClick={handleClick}
              //disabled={disabled}
            >
              Далее
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
