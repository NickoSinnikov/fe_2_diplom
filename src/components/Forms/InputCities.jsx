/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchHandleChange } from "../../Slice/SearchSlice";

export default function InputCities(props) {
  const { direction, type, placeholder } = props;
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();

  /* При вводе города отправляем на запрос на сервер для получения списка городов */
  useEffect(() => {
    setValue(value);
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
  };

  /* Скрытие выпадающего списка городов */
  const onVisible = (event) => {
    event.preventDefault();
    setTimeout(() => setVisible(false), 200); 
  };

  /* Изменение данных в reducer */
  const onHandleChangeDispatch = (id, city) => {
    dispatch(
      searchHandleChange({
        name: direction,
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
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={() => setVisible(true)}
        onBlur={onVisible}
        value={value}
        name={direction}
      />

      {visible && cities.length > 0 ? (
        <ul className="autocomplete-list">
          {cities.map((city) => (
            <li
              className="autocomplete-item"
              key={city._id}
              onClick={() => {
                setValue(city.name);
                console.log(city);
                onHandleChangeDispatch(city._id, city.name);
              }}
            >
              {city.name}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="hidden" />
      )}
    </>
  );
}
