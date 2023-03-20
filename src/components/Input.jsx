import React from "react";
import { useState, useEffect } from "react";

export default function Input(props) {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [cities, setCities] = useState([]);

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
  };

  const onVisible = (event) => {
    event.preventDefault();
    setTimeout(() => setVisible(false), 1000);
  };

  console.log(visible);
  return (
    <>
      <input
        className="form__input"
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        onClick={()=> setVisible(true)}
      />
      {visible ? (
        <div className="autocomplete">
          {cities.length > 0 ? (
            cities.map((city) => (
              <p
                className="autocomplete-item"
                key={city._id}
                // onClick={() =>
                //    onFieldChangeDispatch(city._id, city.name)
                //}
              >
                {city.name}
              </p>
            ))
          ) : (
            <p className="autocomplete-item">Направление не найдено!</p>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
