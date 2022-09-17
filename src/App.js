import './App.css';

import React, {useState, useEffect} from "react";
import {AuthProvider} from './database/AuthContext'
import {auth} from './database/firebase'
import {onAuthStateChanged} from 'firebase/auth'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Assessment from "./Pages/Assessment"; 
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ReportPage from "./Pages/ReportPage"; 
import LandingPage from "./Pages/LandingPage";
import AdminPage from "./Pages/LandingPage";
import Register from "./Pages/Register";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    
    <Router>
    {/* <nav>
      <Link to="/"> Home </Link>
      <Link to="/Assessment"> About </Link>
    </nav> */}
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/LandingPage/" element ={<LandingPage/>}/>
          <Route path="/Assessment" element={<Assessment/>} /> 
          <Route path="/Signup/" element={<Signup/>} />
          <Route path="/ReportPage/" element={<ReportPage/>} />
          <Route path="/Register/" element={<Register/>} /> 
          <Route path="/AdminPage/" element={<AdminPage/>} /> 
      </Routes>
  </AuthProvider>
  </Router>
  )
};


export default App;
