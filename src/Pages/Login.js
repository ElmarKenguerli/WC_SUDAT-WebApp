import React, { useState, useEffect } from 'react';
import '../App.css';
import AddUser from "../database/AddUser"
// design
import {Box} from '@mui/material';
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
                           
                            
                            sx={{    bgcolor: '#2dbddabe', color: "black", border:"1px solid #82d4e4be", height:{height}}}
                        >
                            <label> 
                                
                                <label className='loginHeader'>
                                    
                                    <div>
                                        {/* Panel Logo */}
                                        <img src="logo.jpg"  id="img" style={{ width: "90%", height: "auto", marginTop: "15px", border: "1px solid", borderRadius: "50px"}}/> 
                                        
                                    </div>
                                    
                                    <div className = "loginBox">
                                        {/* Panel Text */}
                                        <label>
                                        <br></br>
                                        Assess your patient's risk of having a substance use disorder <br></br><br></br><br></br>
                                        Sign in to Get Started
                                        </label>
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
