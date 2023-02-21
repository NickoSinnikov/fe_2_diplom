import React from "react";

export default function FormBlock(props){
    return (
      <div className="form-block">
        <label className="form__lable">{props.children}</label>
        <div className="input-block">
          <input className="form__input" />
          <Swap />
          <input className="form__input" />
        </div>
      </div>
    );
}