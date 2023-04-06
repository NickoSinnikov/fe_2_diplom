import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchSeats, trainAdd } from "../Slice/seatsSlice";
import passengersPriceClear from "../Slice/passengersSlice";
import SeatsMap from "./seats/SeatsMap";

export default function SeatsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log(useSelector((state) => state.seats));
  const { train } = useSelector((state) => state.seats.train);
  const seatsDeparture = useSelector(
    (state) => state.seats.departure.seatsCount
  );
  const seatsarrival = useSelector((state) => state.seats.arrival.seatsCount);
  const { passengersCount } = useSelector((state) => state.passengers);

  useEffect(() => {
    //dispatch(passengersPriceClear());
    dispatch(fetchSeats("departure"));
    if (train.arrival) dispatch(fetchSeats("arrival"));
  }, [dispatch]);

  const [disabled, setDisabled] = useState(true);
  const passengersCountAll =
    Number(passengersCount.adult) + Number(passengersCount.child);

  useEffect(() => {
    setDisabled(true);
    if (
      train.arrival &&
      (seatsarrival === 0 || Number(seatsarrival) !== passengersCountAll)
    )
      return;
    if (seatsDeparture === 0 || Number(seatsDeparture) !== passengersCountAll)
      return;
    setDisabled(false);
  }, [passengersCount, seatsarrival, seatsDeparture, passengersCountAll]);

  const handleClick = () => {
    navigate("/passengers/");
  };

  return (
    <div className="container train-content__block">
      <section className="seats order_options">
        <h3 className="title seats_title">Выбор мест</h3>
        {train.departure && (
          <SeatsMap type="departure" className="ticket_header-train" />
        )}
        {train.arrival && (
          <SeatsMap type="arrival" className="ticket_header-train" />
        )}
        <div className="seats_buttons">
          <button
            type="button"
            className="button seats_button"
            onClick={handleClick}
            disabled={disabled}
          >
            Далее
          </button>
        </div>
      </section>
    </div>
  );
}
