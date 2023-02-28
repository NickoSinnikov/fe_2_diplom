import React from "react";
import Swap from "./Swap";
import Label from "./Label";
import Input from "./Input";

export default function HeaderFormDate(props){
  return (
    <div className="form__blockDirection">
      <Label className="form__lable">Дата</Label>
      <div className="input-block">
        <Input type="date" />
        <Input type="date"/>
      </div>
    </div>
  );
}
