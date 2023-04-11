import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Train from "./traincard/Train";
import { useEffect } from "react";
import { stageChange } from "../Slice/stageSlice";

export default function TrainMainBlock() {
  const dispatch = useDispatch();

  const trains = useSelector((state) => state.routes.routes);
  useEffect(() => {
    dispatch(stageChange({ stage: 1 }));
  }, []);
  return (
    <div className="trains__block">
      <div className="trains__block-breadcrumbs"></div>
      <ul className="train__block-list">
        {trains.map((train) => (
          <Train train={train} />
        ))}
      </ul>
    </div>
  );
}
