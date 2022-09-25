import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Form from './Screening';
// icons
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import InfoIcon from '@mui/icons-material/Info';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import QuizIcon from '@mui/icons-material/Quiz';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ErrorIcon from '@mui/icons-material/Error';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ShieldIcon from '@mui/icons-material/Shield';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import Typography from '@mui/material/Typography';

const steps = [
  {
    label: "Introduction",
  },
  {
    label: 'Interview Details',
  },
  {
    label: 'Demographics',
  },
  {
    label: 'Preliminary Screening',
  },
  {
    label: 'Risk Factors',
  },
  {
    label: 'Trauma',
  },
  {
    label: 'Family & Community Risks',
  },
  {
    label: 'Protective Factors'
  },
  {
    label: 'Change Readiness'
  }
];

export default function VerticalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  let docID = ""
  if (props.docID === "")
  {
    //pass
  }
  else
  {
    docID = props.docID
  }
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
   
  };

  const goToStep = (step) => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  
  const stepIcons = {
    0: <EmojiPeopleOutlinedIcon/>,
    1: <InfoIcon/>,
    2: <Diversity3Icon/>,
    3: <QuizIcon />,
    4: <ReportProblemIcon/>,
    5: <ErrorIcon />,
    6: <FamilyRestroomIcon />,
    7: <ShieldIcon />,
    8: <ChangeCircleIcon />
  }

  return (
    <>
    
      <div className="row">
        <div className="leftnav col-md-2">
          <div style={{position: 'fixed',margin: 25}}>
            <Box sx={{ maxWidth: 400 }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel                   
                    optional={  
                      index === 8 ? (  <Typography variant="caption">Last step</Typography>  ) : null
                    }                   
                  >
                    
                    { 
                      index === 0 ? (  <Typography >{stepIcons["0"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 1 ? (  <Typography >{stepIcons["1"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 2 ? (  <Typography >{stepIcons["2"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 3 ? (  <Typography >{stepIcons["3"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 4 ? (  <Typography >{stepIcons["4"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 5 ? (  <Typography >{stepIcons["5"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 6 ? (  <Typography >{stepIcons["6"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 7 ? (  <Typography >{stepIcons["7"]} {step.label}  </Typography>) : null

                    }
                    { 
                      index === 8 ? (  <Typography >{stepIcons["8"]} {step.label}  </Typography>) : null

                    }


                   
                  </StepLabel>

                  <StepContent>
                    <Box sx={{ mb: 2 }}>
                      <div>
                      </div>
                    </Box>
                  </StepContent>

                </Step>
                ))}
              </Stepper>
            </Box>
          </div>
          <div className="row">

          </div>
        </div>
        <div className="col-md-10" >
          <>
            <Form
                stepperState = {activeStep}
                stepperForwardFunction = {handleNext}
                docID = {docID}
                goToStep = {goToStep}
            />
          </>
        </div>
      </div>
    </>
  );
}
