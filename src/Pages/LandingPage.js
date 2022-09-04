import React from 'react'
//import MaterialUIDrawer from '../Components/MuiDrawer'
import {useNavigate} from "react-router-dom";
import MuiDrawer from '../Components/MuiDrawer'
import StyledTableCell from '../Components/StyledTable';
import { IconButton } from '@mui/material';
import PostAddTwoToneIcon from '@mui/icons-material/PostAddTwoTone';
import Button from '@material-ui/core/Button';

const LandingPage = () => {
let navigate = useNavigate();
  return (
    <div>
        <MuiDrawer/>
          {/* <button
        onClick={() => {
          navigate("/Assessment");
        }}
      >
        {" "}
        Go to form
      </button> */}
      <Button size="large" style={{ width: 300, height: 100, fontSize: 25, border: "2px solid dodgerblue", margin:20, color: "dodgerblue" }}  startIcon={<PostAddTwoToneIcon/>}  onClick={() => {
          navigate("/Assessment");
        }}>
        {" "}
        New Form
        
        </Button>
      {/* <StyledTableCell/> */}
      </div>
  )
}

export default LandingPage