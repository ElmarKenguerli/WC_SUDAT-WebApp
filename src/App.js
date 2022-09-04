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
        <div style={{position: 'fixed',margin: 25}}><VerticalLinearStepper/></div>
        
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
