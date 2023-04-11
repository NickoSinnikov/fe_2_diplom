/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function MenuItem(props) {
   const {href} = props;
   return (
      <li className="menu__item">
         <a href={href}>{props.children}</a>
      </li>
   );
}
