import React from "react";
import Swap from "./Swap";
import Label from "./Label";
import Input from "./Input";

export default function HeaderFormDate(props){
  return (
    <div className="form__blockDirection">
      <Label>Дата</Label>
      <div className="input-block">
        <Input type="date" placeholer="ДД/ММ/ГГ"/>
        <Input type="date" placeholer="ДД/ММ/ГГ"/>
      </div>
    </div>
  );
}
