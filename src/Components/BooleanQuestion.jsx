import React, { useState } from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { render } from "react-dom";
import CommentBox from "./CommentBox";

function BooleanQuestion(props) {
  const [selected, setSelected] = useState("");

  const selectionBlurHandler = (event) => {
    setSelected(event.target.value);
    props.updateForm(event);
  };

  return (
    <fieldset>
      <FormControl>
        <p>{props.question}</p>
        <RadioGroup>
          <FormControlLabel
            value="Yes"
            control={
              <Radio
                checked={props.formData[props.name] === "Yes"}
                onChange={(event) => {
                  selectionBlurHandler(event);
                }}
              />
            }
            label="Yes"
            name={props.name}
          />
          <FormControlLabel
            value="No"
            control={
              <Radio
                checked={props.formData[props.name] === "No"}
                onChange={(event) => {
                  selectionBlurHandler(event);
                }}
              />
            }
            label="No"
            name={props.name}
          />
        </RadioGroup>
        <CommentBox
          name={`comment${props.name}`}
          updateForm={props.updateForm}
        />
      </FormControl>
    </fieldset>
  );
}
export default React.memo(BooleanQuestion);
