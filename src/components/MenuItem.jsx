/* eslint-disable react/prop-types */
import React from 'react';

export default function MenuItem(props) {
   const {href, children} = props;
   return (
      <li className="menu__item">
         <a href={href}>{children}</a>
      </li>
   );
}
