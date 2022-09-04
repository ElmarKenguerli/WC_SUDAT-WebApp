import React, { Component, useState } from 'react'
import {Radio, FormControl, RadioGroup, FormControlLabel } from '@material-ui/core';
import {render} from 'react-dom';


    
export default function BooleanQuestion() {
    
    const [selected, setSelected] = useState('');

    const selectionChangeHandler = (event) => {
      setSelected(event.target.value);
    };
  
    return (
      <FormControl>
        <RadioGroup row value={selected} onChange={selectionChangeHandler}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    );
}
