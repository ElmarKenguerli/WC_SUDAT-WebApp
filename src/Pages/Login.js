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
                        <Box >     
                            <label className='loginHeader'>
                                
                                <div >
                                    {/* Panel Logo */}
                                    <img src="sky.png"  id="img" style={{ maxWidth: "100%" , height: height}}/>                            
                                </div>

                            </label>    
                        </Box>
                    </Grid>
                    
                    {/* Right Column : 1*/}
                    <Grid item xs={1}>
                        
                            {AddUser()}
                        
                    </Grid>
                    
                    
            </Grid>
            
           

        </header>
  )
}

export default Login
