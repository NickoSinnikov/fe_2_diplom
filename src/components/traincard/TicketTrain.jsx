import React from 'react';
import moment from 'moment/moment';
import TrainCardDirection from './TrainCardDirection';
import TrainCardType from './TrainCardType';
import trainImg from '../../img/Train-yel.svg';

export default function TicketTrain(route, type) {
   const { train, option } = route;
   const { departure, arrival } = train;

   return (
      <div className="ticket-train__card">
         <div className="ticket-train__card__aside ticket-train__item">
            <div className="ticket-train__card__image">
               <img src={trainImg} alt="alt" />{' '}
            </div>
            <div className="ticket-train__card-info">
               <span className="ticket-train__card__number">
                  {departure.train.name}
               </span>
               <span className="ticket-train__card__rote-text">
                  {departure.from.city.name}
                  <span> &#8594;</span>
               </span>
               <span className="ticket-train__card__rote-text">
                  {departure.to.city.name}
               </span>
            </div>
         </div>

         <div className="ticket-train__card__directions ticket-train__item">
            
               <div className="train__direction-info ">
                  <div className="train__direction-info__time">
                     {moment
                        .unix(departure.from.datetime)
                        .utc()
                        .format('HH:mm')}
                  </div>
                  <div className="ticket-train__card__rote-text">
                     {departure.from.city.name}
                  </div>
                  <div className="train__direction-info__railway ">
                     {departure.from.railway_station_name} вокзал
                  </div>
               </div>
               <div className="direction-arrow">&#8594;</div>
               <div className="train__direction-info ">
                  <div className="train__direction-info__time">
                     {moment.unix(departure.to.datetime).utc().format('HH:mm')}
                  </div>
                  <div className="ticket-train__card__rote-text">
                     {departure.to.city.name}
                  </div>
                  <div className="train__direction-info__railway ">
                     {departure.to.railway_station_name} вокзал
                  </div>
               </div>
            
         </div>
         <div className="ticket-train__item ticket-train__item-time ">
            <p className="ticket-train-travel-time">
               {moment.unix(departure.duration).utc().format('HH:mm')}
            </p>
         </div>
      </div>
   );
}
