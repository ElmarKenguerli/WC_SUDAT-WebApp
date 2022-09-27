import React from "react";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
function ScreeningMessage(props) {
  const [disappear, setDisappear] = useState(props.show);
  const [show, setShow] = useState(props.showContinue);
  const [pass, setPass] = useState(true);
  let navigate = useNavigate();
  
  
  if (props.show && props.showContinue && pass) {
    return (
      <div>
        <fieldset>
          <h1>
            Based on answers provided to the first 10 questions, the client is not required
            to complete the rest of the SUD Assessment. To to proceed anyway: click 'Continue Anyway'{" "}
          </h1>
          <Button
            variant="contained"
            onClick={() => {
              props.setShowAnyway(true);
              setDisappear(true);
              setShow(false);
              setPass(false)
            }}
            sx={{
              bgColor: "green",
              color: "white",
              border: "2px solid #82d4e4be",
            }}
          >
            Continue Anyway
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp; 
          <Button
            variant="contained"
            onClick={() => {
              navigate(-1)  
            }}
            
          >
            Exit Now
          </Button>
        </fieldset>
      </div>
    );
  }
}

export default ScreeningMessage;
