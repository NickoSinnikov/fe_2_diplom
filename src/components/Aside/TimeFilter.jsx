import React, { useState } from "react";


export default function TimeFilter() {
  const [isHidden, setHidden] = useState({
    departure: true,
    arrival: true,
  });

  /** Открывание, скрытие блока */
  const onHidden = (name) => {
    setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="aside-item">
      <div className="time-filter__block">
        <div className="time-filter_header">
          <h4 className="time-filter_header-title title title-goThere">Туда</h4>
          <button
            type="button"
            className={`time-filter_button ${
              isHidden.arrival ? "active-button" : "inactive-button"
            }`}
            onClick={() => onHidden("departure")}
          >
            <p>{isHidden.arrival ? "+" : "-"}</p>{" "}
          </button>
        </div>
        <div
          className={`time-filter_form ${isHidden.departure ? "hidden" : ""}`}
        >
          <p className="time-filter_title">Время отправления</p>
          <div className="time-filter_range">
            {/* <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              //  value={{
              //     min: start_departure_hour_from,
              //     max: start_departure_hour_to,
              //  }}
              //  onChange={(value) =>
              //     handleChange('start_departure', value)
              //  }
            /> */}
          </div>
          <p className="time-filter_title title title-right">Время прибытия</p>
          <div className="time-filter_range">
            {/* <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              //  value={{
              //     min: start_arrival_hour_from,
              //     max: start_arrival_hour_to,
              //  }}
              //  onChange={(value) => handleChange('start_arrival', value)}
            /> */}
          </div>
        </div>
      </div>
      <div className="time-filter__block">
        <div className="time-filter_header">
          <h4 className="time-filter_header-title title title-goThere">
            Обратно
          </h4>
          <button
            type="button"
            className={`time-filter_button ${
              isHidden.arrival ? "active-button" : "inactive-button"
            }`}
            onClick={() => onHidden("arrival")}
          >
            <p>{isHidden.arrival ? "+" : "-"}</p>{" "}
          </button>
        </div>
        <div className={`time-filter_form ${isHidden.arrival ? "hidden" : ""}`}>
          <p className="time-filter_title">Время отправления</p>
          <div className="time-filter_range">
            {/* <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              //  value={{
              //     min: start_departure_hour_from,
              //     max: start_departure_hour_to,
              //  }}
              //  onChange={(value) =>
              //     handleChange('start_departure', value)
              //  }
            /> */}
          </div>
          <p className="time-filter_title title title-right">Время прибытия</p>
          <div className="time-filter_range">
            {/* <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              //  value={{
              //     min: start_arrival_hour_from,
              //     max: start_arrival_hour_to,
              //  }}
              //  onChange={(value) => handleChange('start_arrival', value)}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
