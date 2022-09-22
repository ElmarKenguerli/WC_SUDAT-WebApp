import Slider from '@mui/material/Slider';
import {useState} from 'react';
import React from 'react';
import CommentBox from './CommentBox';

function SliderQuestion(props){
  const[marks,setMarks] = useState([
     
        {
          value: 0,
          label: 'Never',
        },
        {
          value: 1,
          label: 'Once or Twice',
        },
        {
          value: 2,
          label: 'Monthly',
        },
        {
          value: 3,
          label: 'Weekly',
        },
        {
          value: 4,
          label: 'Daily/Almost Daily',
        },
      ]);

      const[marks2,setMarks2] = useState([
     
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

    const selectionChangeHandler = (event) => {
      setQuestionAnswer(event.target.value);
      props.updateForm(event);
    };
    switch(true){
    
    case props.type === 1:
    return (
      <fieldset>
        <p>{question}</p>
        <Slider 
            defaultValue={0}
            style={{ width: 700 ,marginLeft:50}}
            step={1}
            valueLabelDisplay="auto"
            name = {props.name}
            marks={marks}
            min={0}
            max={4}
            color="secondary"
            onChange={selectionChangeHandler}    
        />
        <CommentBox
          name  = {`comment ${props.name}`}
          updateForm = {props.updateForm}
        />
        <div>
        
        </div>
      </fieldset>
    );

    case props.type === 5:
      return (
        <fieldset>
          <p>{question}</p>
          <Slider 
              defaultValue={0}
              style={{ width: 700 ,marginLeft:50}}
              step={1}
              valueLabelDisplay="auto"
              name = {props.name}
              marks={marks2}
              min={0}
              max={5}
              color="secondary"
              onChange={selectionChangeHandler}    
          />
          <CommentBox
            name  = {`comment ${props.name}`}
            updateForm = {props.updateForm}
          />
          <div>
          
          </div>
        </fieldset>
      );
    }
};

export default SliderQuestion;

