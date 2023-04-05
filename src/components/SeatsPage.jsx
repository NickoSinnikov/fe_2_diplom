import Button from './Button';
import SearchFormDate from './Forms/SearchFormDate';
import SearchFormDirection from './Forms/SearchFormDirection';

export default function SeatsPage() {
  return (
    
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
    
  );
}
