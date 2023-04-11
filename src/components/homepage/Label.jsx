/* eslint-disable react/prop-types */
import React from "react";

export default function Label(props){
    const children = props
    return(
        <label className="form__lable">{children}</label>
    )
}