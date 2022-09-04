import './App.css';
//import Header from "./components/Header";
import React from "react";
//import Signup from "./Pages/Signup";
//import Login from "./Pages/Login";
//import { BrowserRouter as Router, Route} from "react-router-dom";
import VerticalLinearStepper from './Components/Stepper'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Assessment from "./Pages/Assessment"; 
import LandingPage from "./Pages/LandingPage";


function App() {
  return (
    <Router>
    {/* <nav>
      <Link to="/"> Home </Link>
      <Link to="/Assessment"> About </Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Assessment" element={<Assessment/>} />
    </Routes>

  </Router>
);
};


export default App;
