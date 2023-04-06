import TrainCardDirection from "./TrainCardDirection";
import TrainCardType from "./TrainCardType";
import trainImg from "../../img/Train.svg";
import { useNavigate } from "react-router";
import { fetchSeats, trainAdd } from "../../Slice/seatsSlice";
import { useDispatch } from "react-redux";
export default function Train(route, type) {
  // const train = props;
  // const {departure} = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { train, option } = route;
  const { departure, arrival } = train;
  //console.log(departure);

  const handleClick = (e) => {
    e.preventDefault();
    // if (option === 'verification') {
    //   navigate('/order/tickets/train');
    //   return;
    // }
    // console.log(route);
    dispatch(trainAdd(route));
    dispatch(fetchSeats());
    navigate("/tickets/seats");
  };
  return (
    <div
      className="
        train-card"
    >
      <div className="train-card__aside">
        <div className="train-card__image">
          <img src={trainImg} />{" "}
        </div>
        <div className="train-card__number">{departure.train.name}</div>
        <div className="train-card__rote">
          <span className="train-card__rote-start">
            Адлер<span> &#8594;</span>
          </span>
          <span className="train-card__rote-from">
            Москва<span> &#8594;</span>
          </span>
          <span className="train-card__rote-to">Санкт-Петербург</span>
        </div>
      </div>
      <div
        className="
      train-card__main"
      >
        <ul className="train-card__directions">
          <TrainCardDirection />
        </ul>
        <div className="train-card__type">
          <TrainCardType departure={departure} />
          <button onClick={handleClick} className="train-card__btn">
            Выбрать места
          </button>
        </div>
      </div>
    </div>
  );
}
