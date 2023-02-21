import React from "react";
import Swap from "./Swap";

export default function HeaderForm() {
  return (
    <form className="header__form">
      <div className="form-block">
        <label className="form__lable">Направление</label>
        <div className="input-block">
          <input className="form__input" />
          <Swap/>
          <input className="form__input" />
        </div>
      </div>
      <div className="form-block">
        <label className="form__lable">Дата</label>
        <div className="input-block">
          <input className="form__input" />
          <input className="form__input" />
        </div>
      </div>
    </form>
  );
}
