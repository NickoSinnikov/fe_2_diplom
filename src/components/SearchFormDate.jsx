import React from "react";
import Swap from "./Swap";
import Label from "./Label";
import Input from "./Input";

export default function SearchFormDate(props) {
  return (
    <div className="search-form-date">
      <Label>Дата</Label>
      <div className="input-block">
        <Input type="date" placeholer="ДД/ММ/ГГ" />
        <Input type="date" placeholer="ДД/ММ/ГГ" />
      </div>
    </div>
  );
}
