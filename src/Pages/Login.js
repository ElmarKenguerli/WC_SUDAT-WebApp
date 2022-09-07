import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css';
//import {setUsernameCaption} from "./LandingPage";
import {setUsernameCaption} from "../Components/MuiDrawer";
import AddUser from "../database/AddUser"
// design
import {Box} from '@mui/material';



const Login = () => {
    
    
    
    return (
    
    <header >
         
            <Box sx= {{width: '100%' , padding:"20px", bgcolor: '#00bcf5', border:"2px solid black"}}>
            <div className='loginHeader'>
                <label> 
                    Substance Use Disorder Assessment Tool
                </label>
                
            </div>
            </Box>
        
        <br></br>
        <br></br>

        <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>

        <div className='text-center mb-5 alert alert-primary'>
            
            <label htmlFor="" className="h2"> 
                Login
            </label>
        </div>


        {AddUser()}
        
        </div>
    </header>
  )
}

export default Login
