import moment from "moment/moment";

export default function TrainCardDirection({ departure }) {
 
  return (
    <li className="train__direction">
      <div className="train__direction-info ">
        <div className="train__direction-info__time">
          {moment.unix(departure.from.datetime).utc().format("HH:mm")}
        </div>
        <div className="train-card__rote-text">{departure.from.city.name}</div>
        <div className="train__direction-info__railway train-card__rote-text">
          {departure.from.railway_station_name}
        </div>
      </div>
      <div className="direction__arrow-time">
        <p className="travel-time">
          {moment.unix(departure.duration).utc().format("HH:mm")}
        </p>
        <div className="direction-arrow">&#8594;</div>
      </div>
      <div className="train__direction-info">
        <div className="train__direction-info__time">
          {moment.unix(departure.to.datetime).utc().format("HH:mm")}
        </div>
        <div className="train-card__rote-text">{departure.to.city.name}</div>
        <div className="train__direction-info__railway train-card__rote-text">
          {departure.to.railway_station_name}
        </div>
      </div>
    </li>
  );
}
