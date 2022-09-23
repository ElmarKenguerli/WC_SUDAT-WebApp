import React from 'react'
import '../App.css'
import { useReducer } from 'react'
import Screening from '../Components/Screening'
import VerticalLinearStepper from '../Components/Stepper'
import {useLocation} from 'react-router-dom';
function Assessment() {
  const location = useLocation();
  let docID = ""
  if (location.state == null)
  {
    docID = ""
  }
  else
  {
    docID = location.state.docID
  }
  
  // const [formData, setFormData] = useReducer(formReducer, {});
  
  // const handleData = event => {
  //   setFormData({
  //     name: event.target.name,
  //     value: event.target.value,
  //   });
  
  // const formReducer = (state, event) => {
  //   return {
  //     ...state,
  //     [event.name]: event.value
  //   }
  //  }
  return (
    
    <>
      
      <VerticalLinearStepper docID = {docID} />
    </>
  );
};

export default Assessment;
