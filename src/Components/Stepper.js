import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Introduction',
  },
  {
    label: 'Client Details',
  },
  {
    label: 'Demographics',
  },
  {
    label: 'Substance Use Screening',
  },
  {
    label: 'Risk Factors',
  },
  {
    label: 'Protective Factors',
  },
  {
    label: 'Change Readiness',
  },
  {
    label: 'Results'
  }
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
   
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
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
  );
}
