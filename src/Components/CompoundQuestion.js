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
  const [questionAnswer, setQuestionAnswer] = useState(0);
  //console.log(questionAnswer);
  const selectionBlurHandler = (event) => {
    setQuestionAnswer(event.target.value);
    props.updateForm(event);
  };
  // const[marks,setQuestionID] = useState(0);
  return (
    <fieldset>
      <FormControl>
        <p>{props.question}</p>
        {/* <RadioGroup row value={selected} onBlur={selectionBlurHandler}> */}
        <RadioGroup row value={selected}>
          <FormControlLabel
            value="Yes"
            control={
              <Radio
                onChange={(event) => {
                  selectionBlurHandler(event);
                  setSelected(event.target.value);
                  setQname(props.name);
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
                onChange={(event) => {
                  setSelected(event.target.value);
                  setQname(props.name);
                }}
              />
            }
            label="No"
          />
        </RadioGroup>
        <div>
          <Slider
            defaultValue={0}
            style={{ width: 700, marginLeft: 20 }}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            value={props.formData[props.name]}
            min={0}
            max={4}
            color="secondary"
            onChange={(e) => selectionBlurHandler(e)}
            name={`${props.name}a`}
          />
        </div>
        <CommentBox name={`comment${Qname}`} updateForm={props.updateForm} />
      </FormControl>
    </fieldset>
  );
}

export default CompoundQuestion;
