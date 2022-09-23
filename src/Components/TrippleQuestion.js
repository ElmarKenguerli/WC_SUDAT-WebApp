import React, { Component, useState } from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { render } from "react-dom";
import CommentBox from './CommentBox';

export default function TrippleQuestion(props) {
  const [selected, setSelected] = useState("");

  const selectionChangeHandler = (event) => {
    // {if(props.stepperUpdate){
    //   props.stepperForwardFunction(props.stepperState)
    // }};
    setSelected(event.target.value);
    props.updateForm(event);
  };

  const labelset2 = {
    value1: "None",
    value2: "Somewhat",
    value3: "A lot",
  };
  const labelset1 = {
    value1: "Does not describe me",
    value2: "Somewhat describes me",
    value3: "Describes me",
  };

  switch (true) {
    case props.labelset === "1":
      return (
        <fieldset>
          <FormControl>
            <p>{props.question}</p>
            <RadioGroup row value={selected} >
              <FormControlLabel
                value="Does Not Describe Me"
                control={
                  <Radio
                  onChange={(e) => selectionChangeHandler(e)}
                  />
                }
                label={labelset1["value1"]}
                name={props.name}
              />
              <FormControlLabel
                value="Somewhat Describes Me"
                control={
                  <Radio
                  onChange={(e) => selectionChangeHandler(e)}
                  />
                }
                label={labelset1["value2"]}
                name={props.name}
              />
              <FormControlLabel
                value="Describes me"
                control={
                  <Radio
                   onChange={(e) => selectionChangeHandler(e)}
                  />
                }
                label={labelset1["value3"]}
                name={props.name}
              />
            </RadioGroup>
          </FormControl>
        </fieldset>
      );

    case props.labelset === "2":
      return (
        <fieldset>
          <FormControl>
            <p>{props.question}</p>
            <RadioGroup row value={selected} >
              <FormControlLabel
                value="None"
                control={
                  <Radio
                  onChange={(e) => selectionChangeHandler(e)}
                  />
                }
                label={labelset2["value1"]}
                name={props.name}
              />
              <FormControlLabel
                value="Some what"
                control={
                  <Radio
                  onChange={(e) => selectionChangeHandler(e)}
                  />
                }
                label={labelset2["value2"]}
                name={props.name}
              />
              <FormControlLabel
                value=" A lot"
                control={
                  <Radio
                  onChange={(e) => selectionChangeHandler(e)}
                  />
                }
                label={labelset2["value3"]}
                name={props.name}
              />
            </RadioGroup>
          </FormControl>
          <CommentBox name={`comment${props.name}`} updateForm={props.updateForm} />
        </fieldset>
      );
  }
}
