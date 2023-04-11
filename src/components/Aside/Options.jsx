import React from 'react';
import Switch from 'react-switch';
import { useState } from 'react';
export default function Options(props) {
   const [checked, setState] = useState(false);
   const handleChange = (val) => {
      setState(val);
   };
   return (
      <li className="options-filter__item">
         <div className="options-filter__icon">
            <img className="options-filter__image " src={props.src} />
         </div>
         <p className="options-filter__title">{props.name}</p>
         <Switch onChange={handleChange} checked={checked} />
      </li>
   );
}
