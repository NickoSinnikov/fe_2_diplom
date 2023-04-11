/* eslint-disable react/prop-types */
import React from "react";

export default function Button(props){
    const {type, className, children} = props
    return(
        <button type={type} className={className}>{children}</button>
    )
}