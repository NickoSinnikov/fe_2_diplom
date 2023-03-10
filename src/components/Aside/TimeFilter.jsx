import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputRange from 'react-input-range';

export default function TimeFilter(){
    const [isHidden, setHidden] = useState({
        departure: true,
        arrival: true,
     });
     const onHidden = (name) => {
        setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
     };
    return(
        <div className="time-filter">
            <div className="timeFilter_header">
               <h4 className="timeFilter_header-title title title-goThere">
                  Туда
               </h4>
               <button
                  type="button"
                  className={`timeFilter_button ${
                     isHidden.departure ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('departure')}
               />
            </div>
            <div
               className={`timeFilter_form ${
                  isHidden.departure ? 'hidden' : ''
               }`}
            >
               <p className="timeFilter_title">Время отправления</p>
               <div className="timeFilter_range">
                  <InputRange
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
                  />
               </div>
               <p className="timeFilter_title title title-right">
                  Время прибытия
               </p>
               <div className="timeFilter_range">
                  <InputRange
                     formatLabel={(value) => `${value}:00`}
                     minValue={0}
                     maxValue={24}
                    //  value={{
                    //     min: start_arrival_hour_from,
                    //     max: start_arrival_hour_to,
                    //  }}
                    //  onChange={(value) => handleChange('start_arrival', value)}
                  />
               </div>
            </div>
        </div>
    )
}