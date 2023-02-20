import React, { Children } from "react";

export default function MenuItem(props){
return(
    <li className={props.className}><a href={props.href}>{props.children}</a></li>
)
}