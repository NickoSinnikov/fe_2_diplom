/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Seat from '../Seat';

export default function KupeClass({ id, seatsList, typeTicket }) {
   const seats = [
      { number: 1, type: 'top', left: '50' },
      { number: 2, type: 'top', left: '50' },
      { number: 3, type: 'top', left: '100' },
      { number: 4, type: 'top', left: '100' },
      { number: 5, type: 'top', left: '150' },
      { number: 6, type: 'top', left: '150' },
      { number: 7, type: 'top', left: '200' },
      { number: 8, type: 'top', left: '200' },
      { number: 9, type: 'top', left: '250' },
      { number: 10, type: 'top', left: '250' },
      { number: 11, type: 'top', left: '300' },
      { number: 12, type: 'top', left: '300' },
      { number: 13, type: 'top', left: '350' },
      { number: 14, type: 'top', left: '350' },
      { number: 15, type: 'top', left: '400' },
      { number: 16, type: 'top', left: '400' },
      { number: 17, type: 'top', left: '450' },
      { number: 18, type: 'top', left: '450' },
      { number: 19, type: 'top', left: '500' },
      { number: 20, type: 'top', left: '500' },
      { number: 21, type: 'top', left: '550' },
      { number: 22, type: 'top', left: '550' },
      { number: 23, type: 'top', left: '600' },
      { number: 24, type: 'top', left: '600' },
      { number: 25, type: 'top', left: '650' },
      { number: 26, type: 'top', left: '650' },
      { number: 27, type: 'top', left: '700' },
      { number: 28, type: 'top', left: '700' },
      { number: 29, type: 'top', left: '750' },
      { number: 30, type: 'top', left: '750' },
      { number: 31, type: 'top', left: '800' },
      { number: 32, type: 'top', left: '800' },
   ];
   return (
      <div className="coach-seats-list coach-seats-list--kupe">
         {seats.map((el) => (
            <Seat
               id={id}
               key={el.number}
               number={el.number}
               typeTicket={typeTicket}
               type={el.type}
               left={el.left}
               available={
                  seatsList[el.number - 1]
                     ? seatsList[el.number - 1].available
                     : false
               }
            />
         ))}
      </div>
   );
}