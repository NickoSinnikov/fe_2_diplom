export default function TrainCardDirection() {
  return (
    <li className="train__direction">
      <div className="train__direction-info ">
        <div className="train__direction-info__time">00:10</div>
        <div className="train__direction-info__city">Москва</div>
        <div className="train__direction-info__railway">Курский вокзал</div>
      </div>
      <div className="direction__arrow-time">
        <p className="travel-time">9:42</p>
        <div className="direction-arrow">&#8594;</div>
      </div>
      <div className="train__direction-info">
        <div className="train__direction-info__time">09:52</div>
        <div className="train__direction-info__city">Санкт-Петербург</div>
        <div className="train__direction-info__railway">Ладожский вокзал</div>
      </div>
    </li>
  );
}
