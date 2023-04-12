/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Switch from 'react-switch';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Slice/filterSlice';

export default function Options(props) {
   const { name, src } = props;
   const { filter } = useSelector((state) => state);
   const dispatch = useDispatch();
   // const [checked, setState] = useState(false);
   const handleChange = (checked, event, id) => {
      const { target } = event;
      // setState(e);
      dispatch(filterChange({ name: id, value: checked }));
   };
   return (
      <li className="options-filter__item">
         <div className="options-filter__icon">
            <img className="options-filter__image " src={src} alt="img" />
         </div>
         <p className="options-filter__title">{props.children}</p>
         <Switch onChange={handleChange} checked={filter[name]} id={name} />
      </li>
   );
}
