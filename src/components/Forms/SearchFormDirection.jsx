import React from "react";
import Label from "../Label";
import Swap from "./Swap";
import InputCities from "./InputCities";

export default function SearchFormDirection(props) {
  return (
    <div className="search-form-direction">
      <Label>Направление</Label>
      <div className="input-block">
        <div className="input__block-from">
          <InputCities placeholder="Откуда" direction="from" />
        </div>
        <Swap />
        <div className="input__block-in">
          <InputCities placeholder="Куда" direction="in" />
        </div>
      </div>
    </div>
  );
}
