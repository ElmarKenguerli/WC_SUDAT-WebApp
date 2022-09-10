import React, { Component, useState } from 'react'
import {Radio, FormControl, RadioGroup, FormControlLabel } from '@material-ui/core';
import {render} from 'react-dom';
    
export default function BooleanQuestion(props) {
    
    const [selected, setSelected] = useState('');

    const selectionChangeHandler = (event) => {
      setSelected(event.target.value);
      props.updateForm(props.number + ": " + (event.target.value)+"\n");
    };
  
    return (
      <FormControl>
        <p>{props.question}</p>
        <RadioGroup 
        row value={selected} onChange={selectionChangeHandler}>
          <FormControlLabel value="Yes" control={<Radio 
          onChange={(event) => setSelected(event.target.value)}/>} label="Yes" />
          <FormControlLabel 
          value="No" control={<Radio
          onChange={(event) => setSelected(event.target.value)}
           />} 
           label="No" />
          
        </RadioGroup>
      </FormControl>
    );
}
