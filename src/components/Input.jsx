import React from "react";
import { useState } from "react";

export default function Input(props){
const [value ,setValue] = useState('');

    const handleChange = (event)=>{
        const { target } = event;
        setValue(target.value)
    };

    console.log(value)
    return(
        <input className="form__input" type={props.type} placeholder={props.placeholder} onChange={handleChange}></input>
    )
}