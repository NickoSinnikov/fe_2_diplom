import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import searchHandleChange from "../../Slice/SearchSlice";

export default function InputCities(props) {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();
  

useEffect(() => {
    if (value.length > 0) {
      fetch(
        `https://netology-trainbooking.netoservices.ru/routes/cities?name=${value}`
      )
        .then((response) => response.json())
        .then((data) => setCities(data));
    } else {
      console.log("нет городов");
    }
  }, [value]);

  const handleChange = (event) => {
    const { target } = event;
    setValue(target.value);
    const citiObj =
         cities &&
         cities.find((city) => city.name === target.value.toLowerCase());
      const id = citiObj ? citiObj._id : '';
      onHandleChangeDispatch(id, target.value);
  };

  const onVisible = (event) => {
    event.preventDefault();
    setVisible(false);
    
  };

  const onHandleChangeDispatch = (id, city) => {
    setValue(city);
    dispatch(
       searchHandleChange({
          name: `${props.direction}`,
          value: {
             id,
             city,
          },
       })
    );
 };
  
  return (
    <>
      <input
        className="form__input"
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        onClick={()=> setVisible(true)}
        onBlur={onVisible} //потеря фокуса
      />

      {visible ? (
        <ul className="autocomplete-list">
          {cities.length > 0 ? (
            cities.map((city) => (
              <li
                className="autocomplete-item"
                key={city._id}
                 onClick={() =>
                    onHandleChangeDispatch(city._id, city.name)
                }
              >
                {city.name}
              </li>
            ))
          ) : (
            <li className="autocomplete-item">Направление не найдено!</li>
          )}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}