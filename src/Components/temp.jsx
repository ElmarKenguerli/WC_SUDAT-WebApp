import React, {useState} from 'react'

function BooleanQuestion(props) {

  const[answer,setQuestionAnswer] = useState('No');
    
    return (
        <div>
            <p>{props.question}</p>
            <input type="radio" 
            value="Yes" 
            name="boolean"
            onChange={(event) => setQuestionAnswer(event.target.value)}
            />
            <input type="radio" 
            value="No" 
            name="boolean"
            onChange={(event) => setQuestionAnswer(event.target.value)}
            /> 
           <div><box><label>{answer}</label></box></div>
        </div>
    );
};
export default BooleanQuestion