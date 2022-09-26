import React, { useState } from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import Slider from "@mui/material/Slider";
import CommentBox from "./CommentBox";

function CompoundQuestion(props) {
  const [marks, setMarks] = useState([
    {
      value: 0,
      label: "Strongly Disagree",
    },
    {
      value: 1,
      label: "Disagree",
    },
    {
      value: 2,
      label: "Somewhat Disagree",
    },
    {
      value: 3,
      label: "Slightly Agree",
    },
    {
      value: 4,
      label: "Agree",
    },
    {
      value: 5,
      label: "Strongly Agree",
    },
  ]);

  const [selected, setSelected] = useState("");
  const [Qname, setQname] = useState("");
  const [questionNumber, setQuestionID] = useState(0);
  const [question, setQuestion] = useState(props.question);
  const [showSlider, setShowSlider] = useState(false);

  const selectionBlurHandler = (event) => {
    props.updateForm(event);
  };

  return (
    <fieldset>
      <FormControl>
        <p>{props.question}</p>
        <RadioGroup row value={selected}>
          <FormControlLabel
            value="Yes"
            control={
              <Radio
                onChange={(event) => {
                  selectionBlurHandler(event);
                  setSelected(event.target.value);
                  setQname(props.name);
                  setShowSlider(true);
                }}
                checked={props.formData[props.name] === "Yes"}
              />
            }
            label="Yes"
            name={props.name}
          />
          <FormControlLabel
            value="No"
            control={
              <Radio
                onChange={(event) => {
                  selectionBlurHandler(event);
                  setSelected(event.target.value);
                  setQname(props.name);
                  setShowSlider(false);
                }}
                checked={props.formData[props.name] === "No"}
              />
            }
            label="No"
            name={props.name}
          />
        </RadioGroup>
        {showSlider && (
          <div>
            <fieldset>
              <small>This influenced your use of substances.</small>
              <Slider
                defaultValue={0}
                style={{ width: 700, marginLeft: 20 }}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                value={props.formData[`${props.name}a`]}
                min={0}
                max={5}
                color="secondary"
                onChange={selectionBlurHandler}
                name={`${props.name}a`}
              />
            </fieldset>
          </div>
        )}
        <CommentBox name={`comment${Qname}`} updateForm={props.updateForm} />
      </FormControl>
    </fieldset>
  );
}

export default CompoundQuestion;
