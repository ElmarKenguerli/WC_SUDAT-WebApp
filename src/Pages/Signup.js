import React, { useState, useEffect } from 'react';
import {db} from '../database/firebase'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot, where} from 'firebase/firestore'

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
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {useNavigate} from "react-router-dom";
import '../App.css';
import AddUser from "../database/AddUser"
import { setUsernameCaption } from '../Components/MuiDrawer';
import { gridColumnsMetaSelector } from '@mui/x-data-grid';




const Signup = () => {
    // form state

    const [title, setTitle] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [IDNumber, setIDNumber] = useState("");
    const [qualification, setQualification] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const [errorLastname, setErrorLastname] = useState("");
    const [errorFirstname, setErrorFirstname] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorContact, setErrorContact] = useState("");
    const [errorIDNumber, setErrorIDNumber] = useState("");
    const [errorQualification, setErrorQualification] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [openAddModal, setOpenAddModel] = useState(false);
    const [users, setUsers] = useState([]);
    
    let navigate = useNavigate();

    // password validation
    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);
    let uName = "";

    function generateUsername()
    {
        let lName = lastname;
        let fName = firstname;

        if (lName === "" || fName === "")
        {
            return("");
        }
        else
        {
            return(fName.slice(0, 1).toLowerCase() + lName);
        }
    }

    const handleUserName = () => {
        setUsername(generateUsername());
    }

    /* function to add new user to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await addDoc(collection(db, 'Users'), {
            title: title,
            lastname: lastname,
            firstname: firstname,
            email: email,
            contact: contact,
            IDNumber: IDNumber,
            qualification: qualification,
            username: username,
            password: password,
            isAdmin: false,
            loggedIn: true
        })
        console.log("Submitting")
        navigate("/");
        } catch (err) {
        alert(err)
        }
    }

    /* function to get all tasks from firestore in realtime */
    // useEffect(() => {
    // const q = query(collection(db, 'Users'), where('username', "==", username))
    //     onSnapshot(q, (querySnapshot) => {
    //     setUsers(querySnapshot.docs.map(doc => ({
    //         id: doc.id,
    //         data: doc.data()
    //     })))
        
    //     })
    // },[])

    //testing purposes
    function printUsersinConsole() {
        
        console.log(`Username: ${username}`);
        console.log(users.length);
        for (let i = 0; i < users.length; ++i)
        {
            console.log(users[i].data);
        }
    }

    function getUsers() {
        
        
        console.log(`User search: ${username}`);
        const q = query(collection(db, 'Users'), where('username', "==", username))
        
        onSnapshot(q, (querySnapshot) => {
        setUsers(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
        
        })
        
        
    }

    function isComplete()
    {
        let complete = true;
        let lName, fName, em, cn, ID, qual, un;

        if (lastname === "")
        {
            lName = "No last name provided!";
            complete = false;
        }
        
        if (firstname === "")
        {
            fName = "No first name provided!";
            complete = false;
        }

        if (email === "")
        {
            em = "No email address provided!";
            complete = false;
        }

        if (contact === "")
        {
            cn = "No contact number provided!";
            complete = false;
        }

        if (IDNumber === "")
        {
            ID = "No ID number provided!";
            complete = false;
        }

        if (qualification === "")
        {
            qual = "No qualification provided!";
            complete = false;
        }

        if (username === "")
        {
            un = "No username provided!";
            complete = false;
        }

        setErrorLastname(lName);
        setErrorFirstname(fName);
        setErrorEmail(em);
        setErrorContact(cn);
        setErrorIDNumber(ID);
        setErrorQualification(qual);
        setErrorUsername(un);

        return complete;
    }

    const handleChange = () => {

    } 

    return (
        <header>
        <Box sx= {{width: '100%' , padding:"20px", bgcolor: '#00bcf5', border:"2px solid black"}}>
            <div className='loginHeader'>
                <label> 
                    Western Cape Substance Use Disorder Assessment Tool
                </label>
                
            </div>
            </Box>
        
        <br></br>
        <br></br>

            <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>
                <div className='text-center mb-5 alert alert-primary'>
                    <label htmlFor="" className="h2"> 
                        Signup
                    </label>
                </div>
                <Box sx = {{padding:10,border: "1px solid black"}}>
                <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="Title"
                            value={title}
                            onChange={(e) => {
                                    setTitle(e.target.value); 
                                }
                            }
                        />
                        <label>
                            
                        </label>
                    </div>
                    <br></br>  
                <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="Lastname"
                            value={lastname}
                            onChange={(e) => {
                                    setLastname(e.target.value); 
                                    setErrorLastname(""); 
                                    handleUserName();
                                }
                            }
                        />
                        <label>
                            {errorLastname}
                        </label>
                    </div>
                    <br></br>  
                    <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="Firstname"
                            value={firstname}
                            onChange={(e) => {
                                        setFirstname(e.target.value); 
                                        setErrorFirstname(""); 
                                        handleUserName();
                                    }
                            }
                        />
                        <label>
                            {errorFirstname}
                        </label>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="Email"
                            value={email}
                            onChange={(e) => {
                                    setEmail(e.target.value); 
                                    setErrorEmail("");
                                }
                            }
                        />
                        <label>
                            {errorEmail}
                        </label>
                    </div>
                    <br></br>  
                    <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="Contact Number"
                            value={contact}
                            onChange={(e) => {
                                    setContact(e.target.value); 
                                    setErrorContact("");
                                }
                            }
                        />
                        <label>
                            {errorContact}
                        </label>
                    </div>
                    <br></br> 
                    <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="ID Number"
                            value={IDNumber}
                            onChange={(e) => {
                                    setIDNumber(e.target.value); 
                                    setErrorIDNumber("");
                                }
                            }
                        />
                        <label>
                            {errorIDNumber}
                        </label>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="Qualification"
                            value={qualification}
                            onChange={(e) => {setQualification(e.target.value); setErrorQualification("");}}
                        />
                        <label>
                            {errorQualification}
                        </label>
                    </div>
                    <br></br>                        
                    <div className="form-group">
                        <TextField 
                            size="small" 
                            variant="outlined"
                            className="form-control"
                            label="Username"
                            value={username}
                            onChange={(e) => {setUsername(e.target.value); setErrorUsername("");}}
                        />
                        <label>
                            {errorUsername}
                        </label>
                    </div>
                    <br></br> 
                    <div className="form-group">
                        <FormControl 
                            variant="outlined" 
                            size="small" 
                            className="form-control"
                        >
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e)=> {setPassword(e.target.value);}}
                                endAdornment={
                                    <InputAdornment>
                                        <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        
                        {password && (
                        <div className="ml-1" style={{ columns: 2 }}>
                            <div>
                                <small 
                                    className={
                                        hasSixChar ? 'text-success' : 'text-danger'
                                    }>
                                        at least 6 characters
                                </small>
                            </div>
                            <div>
                                <small 
                                    className={
                                        hasLowerChar ? 'text-success' : 'text-danger'
                                    }>
                                        one lowercase letter
                                </small>
                            </div>
                            <div>
                                <small 
                                    className={
                                        hasUpperChar ? 'text-success' : 'text-danger'
                                    }>
                                        one uppercase letter
                                </small>
                            </div>
                            <div>
                                <small 
                                    className={
                                        hasNumber ? 'text-success' : 'text-danger'
                                    }>
                                        at least 1 number
                                </small>
                            </div>
                            <div>
                                <small 
                                    className={
                                        hasSpecialChar ? 'text-success' : 'text-danger'
                                    }>
                                        at least 1 special character
                                </small>
                            </div>
                        </div>)}
                    </div>
                    
                    <br></br>

                    <div className="form-group">

                        <TextField 
                            size="small" 
                            type="password"
                            variant="outlined"
                            className="form-control"
                            label="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {setConfirmPassword(e.target.value);}}
                        />

                        {password && confirmPassword && (
                            <FormHelperText className="ml-1 mt-1">
                                {password === confirmPassword ? (
                                    <span className="text-success">
                                        Passwords match
                                    </span> 
                                ) : (
                                    <span className="text-danger">
                                        Passwords do not match
                                    </span>
                                )}
                            </FormHelperText>
                        )}
                        
                    </div>
                </Box>
                <div className="text-center mt-4">
                    <Button 
                        variant="contained" 
                        onClick={handleSubmit}
                        disabled={
                            !title ||
                            !lastname ||
                            !firstname ||
                            !email ||
                            !contact ||
                            !IDNumber ||
                            !qualification || 
                            !username || 
                            !password || 
                            !confirmPassword || 
                            password !== confirmPassword || 
                            !hasLowerChar || !hasSixChar || !hasUpperChar || !hasNumber
                        }
                    >
                        Submit
                    </Button>
                    <Button 
                        variant="contained" 
                        onClick={getUsers}
                    >
                        Get Users
                    </Button>
                    <Button 
                        variant="contained" 
                        onClick={printUsersinConsole}
                    >
                        Print Users
                    </Button>
                </div>
            </div>
    </header>
  )
}

export default Signup
