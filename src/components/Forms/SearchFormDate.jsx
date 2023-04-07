import React from "react";
import Swap from "./Swap";
import Label from "../homepage/Label";
import InputDate from "./InputDate";

export default function SearchFormDate(props) {
  return (
    <div className="search-form-date">
      <Label>Дата</Label>
      <div className="input-block">
        <InputDate type="date" placeholer="ДД/ММ/ГГ" />
        <InputDate type="date" placeholer="ДД/ММ/ГГ" />
      </div>
    </div>
  );
}
