import './App.css';

import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Assessment from "./Pages/Assessment"; 
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
//import Screening from "./Components/Screening"; 
import LandingPage from "./Pages/LandingPage";
//import Home from "./Pages/Dummy";


function App() {
  return (
    
    <Router>
    {/* <nav>
      <Link to="/"> Home </Link>
      <Link to="/Assessment"> About </Link>
    </nav> */}
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/LandingPage/" element ={<LandingPage/>}/>
      <Route path="/Assessment" element={<Assessment/>} /> 
      <Route path="/Signup/" element={<Signup/>} />

    </Routes>

  </Router>
  )
};


export default App;
