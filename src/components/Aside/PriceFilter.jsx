/* eslint-disable react/prop-types */

import Slider from '@mui/material/Slider';
import React,{ useState } from 'react';

export default function PriceFilter() {
   function valueText(value) {
      return `${value}`;
   }
   const minDistance = 10;
   const [value1, setValue1] = useState([20, 37]);

   const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
         setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
   };

   const [value2, setValue2] = useState([20, 37]);

   const handleChange2 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (newValue[1] - newValue[0] < minDistance) {
         if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setValue2([clamped, clamped + minDistance]);
         } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue2([clamped - minDistance, clamped]);
         }
      } else {
         setValue2(newValue);
      }
   };
   return (
      <div className="price-filter">
         <div className="slidercontainer">
            <p className="price-filter__text">
               <span>от</span>
               <span>до</span>
            </p>
            <Slider
               getAriaLabel={() => 'Minimum distance'}
               value={value1}
               onChange={handleChange1}
               valueLabelDisplay="auto"
               getAriaValueText={valueText}
               disableSwap
            />
         </div>
      </div>
   );
}
