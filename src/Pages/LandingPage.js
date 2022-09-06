import React, {useState} from 'react'

import {useNavigate} from "react-router-dom";
import MuiDrawer from '../Components/MuiDrawer'
import StyledTableCell from '../Components/StyledTable';
import { IconButton } from '@mui/material';
import PostAddTwoToneIcon from '@mui/icons-material/PostAddTwoTone';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import {Box} from '@mui/material';
import DataGrid from "../Components/DataGrid"

let nameOfUser = "";

export const setUsernameCaption = (uname) => {
  nameOfUser = uname;
}

export const LandingPage = () => {

  const [username, setUsername] = useState('');

  let navigate = useNavigate();
  
  return (
    <div>
        <MuiDrawer/>

        {/* <div>
          <label>
            <b>Username: </b> 
            {nameOfUser}
          </label>
        </div> */}

        <Box textAlign="center" >
          <Button 
          size="large" 
          className='.center'
          style={
            { 
              width: 300, 
              height: 100, 
              fontSize: 25, 
              border: "2px solid dodgerblue", 
              margin:0, 
              color: "dodgerblue" 
              }}  
          startIcon={<PostAddTwoToneIcon style={{ fontSize: "80px" }}/>}  
          onClick={() => {
            navigate("/Assessment");
          }}>
          {" "}
          New Assessment 
          </Button>
          
          
        </Box>
        
        <Box textAlign="center" width="1000" margin="80px" >
          <DataGrid/>

        </Box>
     
      </div>
  )
}

export default LandingPage