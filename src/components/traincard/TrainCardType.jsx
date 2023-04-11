/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";

export default function TrainCardType(props) {
  const departure = props;
  return (
    <ul
      className="
        train-type__block"
    >
      {departure.available_seats_info.fourth && (
        <li className="train-seats__item">
          <p className="train-seats__type">Сидячий</p>
          <p className="train-seats__count">
            {departure.available_seats_info.fourth}
          </p>
          <span className="train-seats__price">
            от
            {departure.price_info.fourth.top_price}
          </span>
        </li>
      )}
      {departure.available_seats_info.third && (
        <li className="train-seats__item">
          <p className="train-seats__type">Плацкарт</p>
          <p className="train-seats__count">
            {departure.available_seats_info.third}
          </p>
          <span className="train-seats__price">
            от
            {departure.price_info.third.side_price}
          </span>
        </li>
      )}
      {departure.available_seats_info.second && (
        <li className="train-seats__item">
          <p className="train-seats__type">Купе</p>
          <p className="train-seats__count">
            {departure.available_seats_info.second}
          </p>
          <span className="train-seats__price">
            от
            {departure.price_info.second.bottom_price}
          </span>
        </li>
      )}
      {departure.available_seats_info.first && (
        <li className="train-seats__item">
          <p className="train-seats__type">Люкс</p>
          <p className="train-seats__count">
            {departure.available_seats_info.first}
          </p>
          <span className="train-seats__price">
            от
            {departure.price_info.first.top_price}
          </span>
        </li>
      )}
    </ul>
  );
}
