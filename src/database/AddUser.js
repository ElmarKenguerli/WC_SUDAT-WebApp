import {db} from './firebase'
import {collection, addDoc, query, getDocs, where} from 'firebase/firestore'

import React, { useState } from 'react';
import {useNavigate, Link} from "react-router-dom";
import '../App.css';
//import {setUsernameCaption} from "./LandingPage";
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './firebase'
import {useAuthValue} from './AuthContext'

// design
import {
    InputAdornment,
    IconButton,
    OutlinedInput,
    InputLabel,
    Box,
    Button,
    Grid
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function AddUser(){
  let navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState('')
  
  const [data, setData]= useState([])

  // Login function
  const login = e => {
    e.preventDefault()
    
     signInWithEmailAndPassword(auth, email, password)
    .then(async () => {
      
      //Once authenticated: Check if user is admin.
      const ref = query(collection(db, "Users"));
      console.log(email)
      const q = query(ref, where("email", "==", email));
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        
      //console.log(doc.id, " => ", doc.data());

        if( doc.data().isAdmin == true )
        {
          {navigate("/AdminPage")}
            
        }
        else
        {
          {navigate("/LandingPage")}  
        }
      });

      
      
    })
    .catch(err => setError(err.message))
    
  

   
  }
  
  /* function to add new user to firestore */
  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await addDoc(collection(db, 'Users'), {
          userName: userName,
          password: password,
          isAdmin: false,
          loggedIn: true
        })
        console.log("Submitting")
      } catch (err) {
        alert(err)
      }
    }

    return (
      <div >
        <Grid container justifyContent="center">
  

          <Box bgcolor = "White" sx = {{padding:"80px",margin: "40px",border: "1px solid grey", borderRadius: "3px" , width: "60%",justifyContent:"center"}}>
            <form onSubmit={login} name='login_form'>
              <div className="form-group">
                <InputLabel>Email</InputLabel>
                <OutlinedInput  
                    required 
                    sx={{ height:75, fontSize: "20px" }}  
                    fullWidth
                    size="normal" 
                    variant="outlined"
                    className="form-control"
                    label="Email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setErrorMessage("");}}
                />
                    
              </div>
              <br></br>
              <InputLabel>Password</InputLabel>
                <OutlinedInput  
                    required 
                    sx={{ height:75, fontSize: "20px"  }}  
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
                <br></br><br></br>
                <div align="center" style={{marginTop:5}}>
                    
                    <Button
                      
                      variant="contained"
                      size = "large"
                      sx={{bgcolor :"darkblue" , color : "White", border: "2px solid #82d4e4be"}}
                      type = 'submit'
                      
                      >
                      {" "}
                      Log-in
                  </Button>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <div className="text-center mt-4">
                      <span >
                          Don't have an account?&nbsp;  
                          <Link to='/Register'> Register</Link>
                      </span>
                  </div>
                </div>
            </form>
          </Box>   
        </Grid>
      </div>
    )
              
}
export default AddUser