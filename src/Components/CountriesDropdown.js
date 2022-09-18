import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@material-ui/core";


const CountriesDropdown = props => {
  const [country, setCountry] = useState("");

  const onChange = event => {
    const { value } = event.target;
    console.log(value);
    if (!value) return;
    setCountry(value);
    props.updateForm(event);
  };

  return (
    <>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={country}
        onChange={onChange}
        variant="filled"
        style={{ width: 300 }}
        name={props.name}
      >
        {props.dropdownData.map((value, i) => (
          <MenuItem key={i} value={value.name}>
            <em>{value.name}</em>
          </MenuItem>
        ))}

      </Select>
    </>
  );
};

export default CountriesDropdown;