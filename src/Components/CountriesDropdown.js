import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@material-ui/core";


const CountriesDropdown = props => {
  const [country, setCountry] = useState("SOUTH AFRICA");
  

  const onChange = event => {
    const { value } = event.target;
    console.log(value);
    if (!value) return;
    setCountry(value);
  };

  
  return (
     <>
      <Select
        
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={country}
        onChange={onChange}
        variant = "filled"
        style={{width:300}}
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