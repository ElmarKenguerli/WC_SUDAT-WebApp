import React,{useEffect} from 'react'
import PDF from "../Assets/reportTest.pdf";
import '../App.css'
import {Box, Button} from '@mui/material';
import MuiDrawer from '../Components/MuiDrawer'
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import ReportDoc from '../Components/ReportDoc'
function ReportPage() {
    let navigate = useNavigate();

    // Start at top of page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <MuiDrawer/>
            <Box textAlign="center" width="1000" margin="20px" >
                <h2>Thank you for completing the assessment. Please print/download your assessment report</h2>
                <br></br>
                <h4>Assessment Report Below</h4>
                {/* Embedd pdf on page */}
                <embed
                    src={PDF}
                    type="application/pdf"
                    height={800}
                    width={800}
                />
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
            </Box>  
            
            <Box textAlign="center" width="1000" margin="20px" >
                <ReportDoc/>
            </Box>
        </>
    );
};

export default ReportPage;
