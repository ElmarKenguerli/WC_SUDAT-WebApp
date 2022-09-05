import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css';

// design
import {
    InputAdornment,
    IconButton,
    OutlinedInput,
    InputLabel,
    Box,
    Button
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Container from '@material-ui/core/Container';



        
    

const Login = () => {
    // form state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();
    
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
        <Box sx = {{padding:10,border: "1px solid black"}}>

        

            <div className="form-group">
                <InputLabel>Username/Email</InputLabel>
                <OutlinedInput 
                    
                    sx={{ height:75, fontSize: "30px" }}  
                    fullWidth
                    size="normal" 
                    variant="outlined"
                    className="form-control"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <br></br>
                
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput   
                        sx={{ height:75, fontSize: "30px"  }}  
                        
                        fullWidth
                        size = "normal"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment>
                                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
            
            </div>
        </Box>
        <div className="text-center mt-4">
        
        <Button
        variant="contained"
        size = "large"
        onClick={() => {
          navigate("./LandingPage");
        }}
        >
        {" "}
        Log-in
        </Button>
        
        </div>
        </div>
    </header>
  )
}

export default Login
