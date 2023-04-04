import TrainCardDirection from './TrainCardDirection';
import TrainCardType from './TrainCardType';
import trainImg from '../../img/Train.svg';
export default function Train(route, type) {
  // const train = props;
  // const {departure} = props;
  const { train, option } = route;
   const { departure, arrival } = train;
  //console.log(departure);
  return (
    <div
      className="
        train-card"
    >
      <div className="train-card__aside">
        <div className="train-card__image">
          <img src={trainImg} />{' '}
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
          <TrainCardType departure={departure}/>
          <button className="train-card__btn">Выбрать места</button>
        </div>
      </div>
    </div>
  );
}
