export default function TrainCardType(props) {
  const departure = props.departure;
  console.log(departure)
  return (
    <ul
      className="
        train-type__block"
    >
      <li
        className="
        train-type__item"
      >
        <span
          className="
        train-type__name"
        >
          Сидячий
        </span>
        <span className="train-type__quantity">{departure.available_seats}</span>
        <span className="train-type__price">
          от <b>{departure.price_info.fourth.bottom_price}</b>₽
        </span>
      </li>
    </ul>
  );
}
