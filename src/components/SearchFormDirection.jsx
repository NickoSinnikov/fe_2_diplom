import React from "react";
import Label from "./Label";
import Input from "./Input";
import Swap from "./Swap";

export default function SearchFormDirection(props) {
  return (
    <div className="search-form-direction">
      <Label>Направление</Label>
      <div className="input-block">
        <Input placeholder="Откуда" />
        <Swap />
        <Input placeholder="Куда" />
      </div>
    </div>
  );
}
