import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchHandleChange from "../../Slice/SearchSlice";

export default function InputCities(props) {
  const {direction} = props;
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();
  //const { routeFrom, routeIn } = useSelector((state) => state.search);
  //const route = props.direction === "routeFrom" ? routeFrom.city : routeIn.city;
  console.log(direction);

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

  const onVisible = (event) => {
    event.preventDefault();
    setTimeout(() => setVisible(false), 200);
  };

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
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        onClick={() => setVisible(true)}
        onBlur={onVisible} //потеря фокуса
        value={value}
        name={direction}
      />

      {visible && cities.length > 0 ? (
        <ul className="autocomplete-list">
          {cities.map((city) => (
            <li
              className="autocomplete-item"
              key={city._id}
              onClick={() => {setValue(city.name);
                console.log(city)
                 onHandleChangeDispatch(city._id, city.name)}}
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
