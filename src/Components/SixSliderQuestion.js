import React, {useState} from 'react';
import BooleanQuestion from './BooleanQuestion';
import Slider from '@mui/material/Slider';
import CommentBox from './CommentBox';

function SixSliderQuestion(props){
  const[marks, setMarks] = useState
  ([  
    {
      value: 0,
      label: 'Strongly Disagree',
    },
    {
      value: 1,
      label: 'Disagree',
    },
    {
      value: 2,
      label: 'Somewhat Disagree',
    },
    {
      value: 3,
      label:'Slightly Agree',
    },
    {
      value: 4,
      label: 'Agree',
    },
    {
      value: 5,
      label: 'Strongly Agree',
    }
  ]);

    const[questionNumber,setQuestionID] = useState(0);
    const[question,setQuestion] = useState(props.question);
    const[questionAnswer,setQuestionAnswer] = useState(0);
    //console.log(questionAnswer);
    const selectionBlurHandler = (event) => {
      setQuestionAnswer(event.target.value);
      props.updateForm(event);
    };
    // const[marks,setQuestionID] = useState(0);
    return (
      <div>
        <BooleanQuestion
          question = {props.booleanQuestion}
          form = {props.form}
          updateForm = {props.updateForm}
          name ={props.booleanQuestionNumber}
        />
        <p>{question}</p>
        <Slider  
            defaultValue={0}
            style={{ width: 550 ,marginLeft:50}}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={4}
            color="secondary"
            onChange={selectionBlurHandler}
            name = {props.name}
        />
        
        {/* <div><box><label>{questionAnswer}</label></box></div> */}
        <CommentBox
          name  = {`comment ${props.name}`}
          updateForm = {props.updateForm}
        />
      </div>
    );
};

export default SixSliderQuestion;