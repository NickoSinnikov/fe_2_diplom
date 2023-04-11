import React from 'react';
export default function MenuItem(props) {
   return (
      <li className="menu__item">
         <a href={props.href}>{props.children}</a>
      </li>
   );
}
