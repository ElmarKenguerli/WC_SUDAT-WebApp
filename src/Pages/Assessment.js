import React from 'react'
import '../App.css'
import { useReducer } from 'react'
import Screening from '../Components/Screening'
import VerticalLinearStepper from '../Components/Stepper'

function Assessment() {

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
    <VerticalLinearStepper/>
</>
  );
};

export default Assessment;
