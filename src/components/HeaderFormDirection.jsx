import React from "react";
import Label from "./Label";
import Input from "./Input";
import Swap from "./Swap";


export default function HeaderFormDirection(props){
    return (
      <div className="form__blockDirection">
        <Label className="form__lable">Направление</Label>
        <div className="input-block">
          <Input />
          <Swap/>
          <Input />
        </div>
      </div>
    );
}