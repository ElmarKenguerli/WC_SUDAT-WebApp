import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css';
//import {setUsernameCaption} from "./LandingPage";
import {setUsernameCaption} from "../Components/MuiDrawer";

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

export function AddUser(){
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState('')

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
      <div>
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
                  value={userName}
                  onChange={(e) => {setUserName(e.target.value); setErrorMessage("");}}
              />
              <label>
                  {errorMessage}
              </label>    
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
                if (userName !== "")
                {
                //setUsernameCaption(email);
                onclick = (handleSubmit);
                navigate("./LandingPage");
                }
                else
                {
                setErrorMessage("No username provided!")
                }

                }}
                >
                {" "}
                Log-in
            </Button>

          </div>
      </div>
      
    )
              
}
export default AddUser