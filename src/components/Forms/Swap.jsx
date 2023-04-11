import React from "react";
import { cityExchange } from "../../Slice/SearchSlice";
import { useDispatch } from "react-redux";

export default function Swap() {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(cityExchange());
  };
  return <button type="button" className="btn-swap" onClick={onClick}></button>;
}
