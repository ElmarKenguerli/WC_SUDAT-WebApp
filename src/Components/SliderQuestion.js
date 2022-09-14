import Slider from '@mui/material/Slider';
import {useState} from 'react';
import React from 'react';
// import Slider from '@mui/material/Slider';

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

      const[questionNumber,setQuestionID] = useState(0);
      const[question,setQuestion] = useState(props.question);
      const[questionAnswer,setQuestionAnswer] = useState(0);
      console.log(questionAnswer);
    // const[marks,setQuestionID] = useState(0);
    return (
      <div>
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
        <div>
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
      </div>
    );
};

export default SliderQuestion;
