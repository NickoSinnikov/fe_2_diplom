/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import routeTo from '../../img/AsideRouteTo.svg';
import routeBack from '../../img/AsideRouteaBack.svg';

import { filterChange } from '../../Slice/filterSlice';

export default function TimeFilter() {
   const [isHidden, setHidden] = useState({
      departure: true,
      arrival: true,
   });

   const dispatch = useDispatch();
   // const { price_from, price_to } = useSelector((state) => state.filter);

   const minDistance = 10;
   const [departureTimeFrom, setDepartureTimeFrom] = useState([5, 20]);
   const [departureTimeTo, setDepartureTimeTo] = useState([5, 20]);
   const [arrivalTimeFrom, setArrivalTimeFrom] = useState([5, 20]);
   const [arrivalTimeTo, setArrivalTimeTo] = useState([5, 20]);

   const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setDepartureTimeFrom([
            Math.min(newValue[0], departureTimeFrom[1] - minDistance),
            departureTimeFrom[1],
         ]);
      } else {
         setDepartureTimeFrom([
            departureTimeFrom[0],
            Math.max(newValue[1], departureTimeFrom[0] + minDistance),
         ]);
      }
      dispatch(
         filterChange({ name: 'start_departure_hour_from', value: departureTimeFrom[0] })
      );

      dispatch(filterChange({ name: 'start_departure_hour_to', value: departureTimeFrom[1] }));
   };

   const handleChange2 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setDepartureTimeTo([
            Math.min(newValue[0], departureTimeTo[1] - minDistance),
            departureTimeTo[1],
         ]);
      } else {
         setDepartureTimeTo([
            departureTimeTo[0],
            Math.max(newValue[1], departureTimeTo[0] + minDistance),
         ]);
      }
      dispatch(filterChange({ name: 'price_from', value: departureTimeTo[0] }));

      dispatch(filterChange({ name: 'price_to', value: departureTimeTo[1] }));
   };

   const handleChange3 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setArrivalTimeFrom([
            Math.min(newValue[0], arrivalTimeFrom[1] - minDistance),
            arrivalTimeFrom[1],
         ]);
      } else {
         setArrivalTimeFrom([
            arrivalTimeFrom[0],
            Math.max(newValue[1], arrivalTimeFrom[0] + minDistance),
         ]);
      }
      dispatch(
         filterChange({ name: 'price_from', value: arrivalTimeFrom[0] })
      );

      dispatch(filterChange({ name: 'price_to', value: arrivalTimeFrom[1] }));
   };

   const handleChange4 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setArrivalTimeTo([
            Math.min(newValue[0], arrivalTimeTo[1] - minDistance),
            arrivalTimeTo[1],
         ]);
      } else {
         setArrivalTimeTo([
            arrivalTimeTo[0],
            Math.max(newValue[1], arrivalTimeTo[0] + minDistance),
         ]);
      }
      dispatch(filterChange({ name: 'price_from', value: arrivalTimeTo[0] }));

      dispatch(filterChange({ name: 'price_to', value: arrivalTimeTo[1] }));
   };

   /** Открывание, скрытие блока */
   const onHidden = (name) => {
      setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
   };

   return (
      <>
         <div className="time-filter__block aside-item">
            <div className="time-filter_header aside__block-title">
               <img src={routeTo} alt="alt" />
               <span className="filter-title">Туда</span>
               <button
                  type="button"
                  className={`aside-hidden__btn ${
                     isHidden.departure ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('departure')}
               ></button>
            </div>
            <div
               className={`time-filter_form ${
                  isHidden.departure ? 'hidden' : ''
               }`}
            >
               <p className="time-filter_title">Время отправления</p>
               <div className="time-filter_range">
                  <Slider
                     getAriaLabel={() => 'Minimum distance'}
                     value={departureTimeFrom}
                     onChange={handleChange1}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     disableSwap
                  />
               </div>
               <p className="time-filter_title title title-right">
                  Время прибытия
               </p>
               <div className="time-filter_range">
               <Slider
                     getAriaLabel={() => 'Minimum distance'}
                     value={departureTimeTo}
                     onChange={handleChange2}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     disableSwap
                  />
               </div>
            </div>
         </div>
         <div className="time-filter__block aside-item">
            <div className="time-filter_header aside__block-title">
               <img src={routeBack} alt="alt" />
               <span className="filter-title">Обратно</span>
               <button
                  type="button"
                  className={`aside-hidden__btn ${
                     isHidden.arrival ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('arrival')}
               ></button>
            </div>
            <div
               className={`time-filter_form ${
                  isHidden.arrival ? 'hidden' : ''
               }`}
            >
               <p className="time-filter_title">Время отправления</p>
               <div className="time-filter_range">
               <Slider
                     getAriaLabel={() => 'Minimum distance'}
                     value={arrivalTimeFrom}
                     onChange={handleChange3}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     disableSwap
                  />
               </div>
               <p className="time-filter_title title title-right">
                  Время прибытия
               </p>
               <div className="time-filter_range">
               <Slider
                     getAriaLabel={() => 'Minimum distance'}
                     value={arrivalTimeTo}
                     onChange={handleChange4}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     disableSwap
                  />
               </div>
            </div>
         </div>
      </>
   );
}
