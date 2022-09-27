import React,{useEffect} from 'react'
import PDF from "../Assets/reportTest.pdf";
import '../App.css'
import {Box, Button} from '@mui/material';
import MuiDrawer from '../Components/MuiDrawer'
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import ReportDoc from '../Components/ReportDoc'
import {useLocation} from 'react-router-dom';

function ReportPage() {
    let navigate = useNavigate();
    const location = useLocation();
    let formData = []
    
    if (location.state == null)
    {
        //docID = ""
    }
    else
    {
        formData = location.state.formData
    }
    // Start at top of page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Box  ><MuiDrawer/></Box>
            
            <Box textAlign="center" width="1000" margin="20px" >
                <h2>Thank you for completing the assessment. Please print/download your assessment report</h2>
                <br></br>
                <h4>Assessment Report Below</h4>
                
            </Box>
            <Box textAlign="center" width="1000" margin="80px" >
                
                <Button 
                    size="normal" 
                    className='.right'
                    style={
                        { 
                        width: 200, 
                        height: 70, 
                        fontSize: 25, 
                        border: "2px solid dodgerblue", 
                        margin:0, 
                        color: "dodgerblue" 
                        }}  
                    startIcon={<HomeIcon style={{ fontSize: "50px" }}/>}  
                    onClick={() => {
                        navigate("/LandingPage");
                }}>
                    {" "}
                    Home 
                </Button>
                
                <Box textAlign="center" width="1000" margin="20px" >
                    <ReportDoc formData = {formData}/>
                </Box>
            </Box>  
            
            
        </>
    );
};

export default ReportPage;
