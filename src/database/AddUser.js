import {db} from './firebase'
import {collection, addDoc, query, onSnapshot, where} from 'firebase/firestore'

import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
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
    Button
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
    .then(() => {
      const ref = query(collection(db, "Users"));

      const q = query(ref, where("email", "==", email));
      
      onSnapshot(q, (querySnapshot) => 
      {
        querySnapshot.docs.map((doc) => {
          setData(doc.data())

        })
      })

      console.log(data.isAdmin)
      if(data.isAdmin == true )
      {
        {navigate("/AdminPage")}
           
      }
      else
      {
        {navigate("/LandingPage")}  
      }
      
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
        <Box bgcolor = "White" sx = {{padding:10,border: "1px solid grey", borderRadius: "10px" }}>
          <form onSubmit={login} name='login_form'>
            <div className="form-group">
              <InputLabel>Email</InputLabel>
              <OutlinedInput  
                  required 
                  sx={{ height:75, fontSize: "30px" }}  
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
              <br></br><br></br>
              <div align="right" style={{marginTop:5}}>
                  
                  <Button
                    
                    variant="contained"
                    size = "large"
                    sx={{bgcolor :"darkblue" , color : "White", border: "2px solid #82d4e4be"}}
                    type = 'submit'
                    // onClick={
                    //   () => {
                    // if (email !== "")
                    // {
                    
                    // login()
                    // }
                    // else
                    // {
                    // setErrorMessage("No username provided!")
                    // }

                    // }}
                    
                    >
                    {" "}
                    Log-in
                </Button>
                
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                    variant="contained"
                    size = "large"
                    sx={{bgcolor :"darkblue" , color : "White", border: "2px solid #82d4e4be"}}
                    onClick={() =>navigate("./Register")}
                    >
                    Register
                </Button>
              </div>
          </form>
        </Box>   
      </div>
    )
              
}
export default AddUser