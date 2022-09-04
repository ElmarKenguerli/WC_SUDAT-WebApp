import './App.css';
import Screening from "./Pages/Screening";
//import Header from "./components/Header";
import React from "react";
//import Signup from "./Pages/Signup";
//import Login from "./Pages/Login";
//import { BrowserRouter as Router, Route} from "react-router-dom";
import VerticalLinearStepper from './Components/Stepper'

function App() {
  return (
    <>
    <div className="row">
        <div className="leftnav col-md-2">
        {/*<ul class="list-group">
        <li class="list-group-item">Substance Use Assessment</li>


        <li class="list-group-item list-group-item-primary">Introduction</li>
        <li class="list-group-item list-group-item-primary">Client Details</li>
        <li class="list-group-item list-group-item-primary">Demographics</li>
        <li class="list-group-item list-group-item-primary">Substance Use Screening</li>
        <li class="list-group-item list-group-item-primary">Assessment of Risk Factors</li>
        <li class="list-group-item list-group-item-primary">Assessment of Protective Factors</li>
        <li class="list-group-item list-group-item-primary">Change Readiness and Treatment Eagerness</li>
        <li class="list-group-item list-group-item-primary">Results</li>
  </ul>*/}
        <div style={{margin: 30}}><VerticalLinearStepper/></div>
        
            <div className="row">
            
            </div>
        </div>
        <div className="col-md-10">
            <><Screening/></>
        
        </div>
    </div>
</>
  );
};


export default App;
