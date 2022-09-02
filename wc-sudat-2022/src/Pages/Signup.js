import React, { useState } from 'react';

// design
import {
    TextField,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    Button,
    FormHelperText,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    // form state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    

    // password validation
    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

    return (
    <div className='container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5'>
        <div className='text-center mb-5 alert alert-primary'>
            <label htmlFor="" className="h2"> 
                Signup
            </label>
        </div>
        <div className="form-group">
            <TextField 
                size="small" 
                variant="outlined"
                className="form-control"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <TextField 
                size="small" 
                variant="outlined"
                className="form-control"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>

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
                    onChange={(e)=> setPassword(e.target.value)}
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
        <div className="form-group">
            <TextField 
                size="small" 
                type="password"
                variant="outlined"
                className="form-control"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
        <div className="text-center mt-4">
            <Button 
                variant="contained" 
                disabled={
                    !username || 
                    !email || 
                    !password || 
                    !confirmPassword || 
                    password !== confirmPassword || 
                    !hasLowerChar || !hasSixChar || !hasUpperChar || !hasNumber
                }
            >
                Submit
            </Button>
        </div>
    </div>
  )
}

export default Signup
