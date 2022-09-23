import React, { useState } from 'react';
import '../App.css';
import AddUser from "../database/AddUser"
// design
import {Box} from '@mui/material';


const Login = () => {
    
    return (    
        <header >
            <Box 
                margin="8px" 
                
                sx={{   padding:"20px", bgcolor: 'darkblue', color: "white", border:"1px solid #82d4e4be", borderRadius: "20px"}}
            >
                <label > 
                    <img src="logo.jpg"  id="img" style={{marginRight:"50px", float: "left", width: "300px", height: "auto"}}/>
                    <label className='loginHeader'>
                        Western Cape Substance Use Disorder Assessment Tool 
                    </label>    
                    
                </label> 
                
                    
               
            </Box>
            
            <br></br>
            <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>
                <div className='text-center mb-5 alert alert-secondary'>
                    <label htmlFor="" className="h2" > 
                        Login
                    </label>
                </div>
                {AddUser()}
            </div>
        </header>
  )
}

export default Login
