import React, { useState } from 'react';
import '../App.css';
import AddUser from "../database/AddUser"
// design
import {Box} from '@mui/material';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import Grid from '@mui/material/Grid';

const Login = () => {
    
    return (    
        <header >
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                columns={{ md: 2 }}
                spacing={2}
            >
                    <Grid item xs={1}>
                        <Box 
                            margin="8px" 
                            className= "col-md-6 "
                            sx={{    bgcolor: 'darkblue', color: "white", border:"1px solid #82d4e4be", borderRadius: "20px"}}
                        >
                            <label class="leftside"> 
                                <img src="logo.jpg"  id="img" style={{marginRight:"50px", float: "left", width: "300px", height: "auto"}}/>
                                <label className='loginHeader'>
                                    Western Cape Substance Use Disorder Assessment Tool 
                                </label>    
                                
                            </label> 
                            
                                
                        
                        </Box>
                    </Grid>

                    <Grid item xs={1}>
                        <div className='col-md-6 '>
                            <div className="rightside">
                            <LoginSharpIcon style={{ fontSize: "80px" }}/>
                            
                            {AddUser()}
                            </div>
                        </div>
                    </Grid>
                    
                    
            </Grid>
            
           

        </header>
  )
}

export default Login
