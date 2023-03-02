import React from "react";
import Label from "./Label";
import Input from "./Input";
import Swap from "./Swap";


export default function HeaderFormDirection(props){
    return (
      <div className="form__blockDirection">
        <Label>Направление</Label>
        <div className="input-block">
          <Input placeholder="Откуда"/>
          <Swap/>
          <Input placeholder="Куда"/>
        </div>
      </div>
    );
}