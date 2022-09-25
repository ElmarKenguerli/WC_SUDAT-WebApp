import React ,{useState, useEffect} from 'react'
import {auth} from '../database/firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from '../database/AuthContext'
import '../App.css';
import {db} from '../database/firebase'
import {collection, addDoc} from 'firebase/firestore'
// design
import {
    TextField,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    Button,
    Box,
    FormHelperText,
    selectClasses,
} from '@mui/material';
import Grid from '@mui/material/Grid';

function Register() {

    /*** 
     Declare state hooks 
     ***/
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {setTimeActive} = useAuthValue()
    const { height, width } = useWindowDimensions();
    /*** 
     @function validatePassword() returns true if *password* and *confirm* match and do not match the empty string
     ***/    
    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
        if (password !== confirmPassword) {
            isValid = false
            setError('Passwords does not match')
        }
        }
        return isValid
    }

    /*** 
     @function register() ensures that the provided password is valid, then creates a user account with the
     provided credentials.
     It also renders all the necessary GUI components to the screen. 
     ***/

     /*** 
     @function getWindowDimensions() Returns the dimensions of the users screen
     ***/
     function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      /*** 
     @function useWindowDimensions() Uses the dimensions of the users screen from getWindowDimensions()
     ***/
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
  
    /*** 
    @function register() Validates sign up credentials and creates new user account - stored to firebase collection
    ***/
    const register = e => {

        e.preventDefault()
        setError('')
        if(validatePassword()) {
        // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setTimeActive(true)
                navigate('/LandingPage')
            }).catch((err) => alert(err.message))
            
        //Add user to collection as well
        {addUserToCollection(e)}
        
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const addUserToCollection = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, 'Users'), {
            email: email,
            isAdmin: false
          })
          console.log("Submitting")
        } catch (err) {
          alert(err)
        }
      }

    return (
        <header>
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
                                        
                                        <img src="logo.jpg"  id="img" style={{ width: "90%", height: "auto", marginTop: "15px", border: "1px solid", borderRadius: "5px"}}/> 
                                        
                                    </div>
                                        <div className = "loginBox">
                                            {/* Spacing */}
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
                        <Grid container justifyContent="center">
                            <Box bgcolor = "White" sx = {{padding:"80px",margin: "40px",border: "1px solid grey", borderRadius: "3px" , width: "60%",justifyContent:"center"}}>
                                <div >
                                    {error && 
                                        <div className='auth__error'>
                                            {error}
                                        </div>
                                    }
                                    <form onSubmit={register} name='registration_form'>
                                        <div className="form-group">
                                            <TextField 
                                                size="small" 
                                                variant="outlined"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                label="Email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <br></br>  
                                        <div className="form-group">  
                                            <TextField 
                                                size="small" 
                                                variant="outlined"
                                                className="form-control"
                                                placeholder="Enter your password"
                                                label="Password"
                                                type="password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <br></br>  
                                        <div className="form-group">
                                            <TextField 
                                                size="small" 
                                                variant="outlined"
                                                className="form-control"
                                                placeholder="Retype password"
                                                label="Confirm Password"
                                                type="password"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                        <br></br> 
                                        <div className="text-center mt-4">
                                            <Button variant="contained"
                                                    sx={{bgcolor :"darkblue" , color : "white", border: "2px solid #82d4e4be"}} 
                                                    type='submit'>Register</Button>
                                        </div>
                                    </form>
                                    <div className="text-center mt-4">
                                        <span >
                                            Already have an account?  
                                            <Link to='/'>login</Link>
                                        </span>
                                    </div>
                                </div>
                            </Box>
                        </Grid>
                </Grid>   
                    
            </Grid>
        </header>
    )
}

export default Register