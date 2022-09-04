import React from 'react'
import MaterialUIDrawer from '../Components/MuiDrawer'
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
let navigate = useNavigate();
  return (
    <div><MaterialUIDrawer/>
          <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        Go to form
      </button></div>
  )
}

export default LandingPage