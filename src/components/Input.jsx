import React from "react";

export default function Input(props){
    return(
        <input className="form__input" type={props.type} placeholder={props.placeholder}></input>
    )
}