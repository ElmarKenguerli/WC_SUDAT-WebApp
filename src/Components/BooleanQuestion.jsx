import React, { Component, useState } from 'react'
import { Radio, FormControl, RadioGroup, FormControlLabel } from '@material-ui/core';
import { render } from 'react-dom';
import CommentBox from './CommentBox';

function showFollup(props) {
  BooleanQuestion(props);
}

function BooleanQuestion(props) {
  const [selected, setSelected] = useState('');
  const [Qname, setQname] = useState('');

  const selectionBlurHandler = (event) => {
    // {if(props.stepperUpdate){
    //   props.stepperForwardFunction(props.stepperState)
    // }};
    setSelected(event.target.value);
    props.updateForm(event);
  };

  console.log(JSON.stringify(props.formData))

  return (
    <fieldset>
      <FormControl>
        <p>{props.question}</p>
        {/* <RadioGroup row value={selected} onClick={selectionBlurHandler}> */}
        <RadioGroup row value={selected}>
          <FormControlLabel 
            value="Yes"
            control={
              <Radio 
              checked={props.formData[props.name] === "Yes"}
              onChange={(event) => {
                selectionBlurHandler(event);
              }} />}
            label="Yes"
            name={props.name}
          />
          <FormControlLabel
            value="No"
            control={<Radio 
              checked={props.formData[props.name] === "No"}
              onChange={(event) => {
              selectionBlurHandler(event)
            }} />}
            label="No"
            name={props.name}
          />
        </RadioGroup>
        <CommentBox
          name={`comment${Qname}`}
          updateForm={props.updateForm}
        />
      </FormControl>
    </fieldset>
  );

}
export default React.memo(BooleanQuestion);