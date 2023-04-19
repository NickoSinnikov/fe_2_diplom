/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import Slider from '@mui/material/Slider';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Slice/filterSlice';

export default function PriceFilter() {
   const dispatch = useDispatch();
   const { price_from, price_to } = useSelector((state) => state.filter);

   const minDistance = 10;
   const [value1, setValue1] = useState([price_from, price_to]);
   console.log(price_from);
   const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
         setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
      dispatch(filterChange({ name: 'price_from', value: value1[0] }));

      dispatch(filterChange({ name: 'price_to', value: value1[1] }));
   };

   return (
      <div className="price-filter aside-item">
         <div className="filter-title">Стоимость</div>
         <div className="slidercontainer">
            <p className="price-filter__text">
               <span>от</span>
               <span>до</span>
            </p>
            <Slider
               getAriaLabel={() => 'Minimum distance'}
               value={value1}
               onChange={handleChange1}
               valueLabelDisplay="on"
               max={7000}
               min={0}
               // getAriaValueText={valueText}
               disableSwap
            />
         </div>
      </div>
   );
}
