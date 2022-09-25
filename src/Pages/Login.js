import React, { useState, useEffect } from 'react';
import '../App.css';
import AddUser from "../database/AddUser"
// design
import {Box} from '@mui/material';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import Grid from '@mui/material/Grid';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  
const Login = () => {
    const { height, width } = useWindowDimensions();
    return (    
        <header >
            {/* Grid container to split screen into 2 columns */}
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                columns={{ md: 2 }}
                spacing={2}
            >
                    {/* Left Column : 1*/}
                    <Grid item xs={1}>
                        <Box 
                           
                            
                            sx={{    bgcolor: 'darkblue', color: "white", border:"1px solid #82d4e4be", height:{height}}}
                        >
                            <label> 
                                
                                <label className='loginHeader'>
                                    
                                    <div>
                                        
                                        <img src="logo.jpg"  id="img" style={{ width: "90%", height: "auto", marginTop: "15px", border: "1px solid", borderRadius: "5px"}}/> 
                                        
                                    </div>
                                        <div className = "loginBox">
                                            {/* Spacing */}
                                            <br></br><br></br><br></br><br></br><br></br><br></br>    
                                            Assess your Risk of having a substance use disorder <br></br><br></br><br></br>
                                            Sign in to Get Started
                                        </div>
                                        
                                   
                                </label>    
                                
                            </label> 
                            
                                
                        
                        </Box>
                    </Grid>
                    
                    {/* Right Column : 1*/}
                    <Grid item xs={1}>
                        <div >
                            <div >
                            
                            
                            {AddUser()}
                            </div>
                        </div>
                    </Grid>
                    
                    
            </Grid>
            
           

        </header>
  )
}

export default Login
