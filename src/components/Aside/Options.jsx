/* eslint-disable react/prop-types */
import Switch from 'react-switch';
import React, { useState } from 'react';

export default function Options(props) {
   const {src, name} = props;
   const [checked, setState] = useState(false);
   const handleChange = (val) => {
      setState(val);
   };
   return (
      <li className="options-filter__item">
         <div className="options-filter__icon">
            <img className="options-filter__image " src={src} alt="img"/>
         </div>
         <p className="options-filter__title">{name}</p>
         <Switch onChange={handleChange} checked={checked} />
      </li>
   );
}
