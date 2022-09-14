import React, {useState} from 'react';
import BooleanQuestion from './BooleanQuestion';
import Slider from '@mui/material/Slider';

function SixSliderQuestion(props){
const[marks,setMarks] = useState([
     
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
            label: 'Strongly',
          }
      ]);

      const[questionNumber,setQuestionID] = useState(0);
      const[question,setQuestion] = useState(props.question);
      const[questionAnswer,setQuestionAnswer] = useState(0);
      console.log(questionAnswer);
    // const[marks,setQuestionID] = useState(0);
    return (
        <div>
            
            <BooleanQuestion
            question = {props.booleanQuestion}
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
                onChange={(event) => setQuestionAnswer(event.target.value)}
                  
            />
            {/* <div><box><label>{questionAnswer}</label></box></div> */}
            
        
        </div>
    );
};

export default SixSliderQuestion;