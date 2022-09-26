import Slider from "@mui/material/Slider";
import { useState } from "react";
import React from "react";
// import Slider from '@mui/material/Slider';
import CommentBox from "./CommentBox";

function TempSliderQuestion(props) {
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

  const [questionNumber, setQuestionID] = useState(0);
  const [question, setQuestion] = useState(props.question);
  const [questionAnswer, setQuestionAnswer] = useState("currentState");
  console.log(questionAnswer);
  // const[marks,setQuestionID] = useState(0);
  const selectionChangeHandler = (event) => {
    setQuestionAnswer(event.target.value);
    props.updateForm(event);
  };
  return (
    <div>
      <p>{question}</p>
      <Slider
        defaultValue={2}
        style={{ width: 550, marginLeft: 50 }}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={4}
        color="secondary"
        onChange={selectionChangeHandler}
        name={props.name}
      />
      <CommentBox
        name={`comment ${props.name}`}
        updateForm={props.updateForm}
      />
    </div>
  );
}

export default TempSliderQuestion;
