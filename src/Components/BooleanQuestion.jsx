import React, { Component, useState } from 'react'
import {Radio, FormControl, RadioGroup, FormControlLabel } from '@material-ui/core';
import {render} from 'react-dom';
import CommentBox from './CommentBox';
function showFollup(props){
  BooleanQuestion(props);
  
}
function BooleanQuestion(props) {
    
    const [selected, setSelected] = useState('');
    const [Qname, setQname] = useState('');

  


    const selectionBlurHandler = (event) => {
      // {if(props.stepperUpdate){
      //   props.stepperForwardFunction(props.stepperState)
      // }};
      console.log(event.target.value)
      setSelected(event.target.value);
      props.updateForm(event);
    };
   
    return (
      <fieldset>
      <FormControl>
        <p>{props.question}</p>
        <RadioGroup row value={selected} onClick={selectionBlurHandler}>
          <FormControlLabel value="Yes" 
            control={
              <Radio onChange={(event) => {
                setSelected(event.target.value); 
                setQname(props.name);
              }}/>} 
            label="Yes"
            name = {props.name}
          />
          <FormControlLabel 
            value="No" 
            control={<Radio onChange={(event) => {
              setSelected(event.target.value); 
              setQname(props.name);
            }}/>} 
            label="No"
            name = {props.name}
          />
        </RadioGroup>
        <CommentBox
          name  = {`comment ${Qname}`}
          updateForm = {props.updateForm}
        />
      </FormControl>
      </fieldset>
    );
    
}
export default React.memo(BooleanQuestion);