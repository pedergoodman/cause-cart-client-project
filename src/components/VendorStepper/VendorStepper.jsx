// * - IMPORTING -
// React
import * as React from "react";
// MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Components
import AccountVerification from "./AccountVerification/AccountVerification";
import Meeting from "./Meeting/Meeting";
import Contract from "./Contract/Contract";
import AddProducts from "./AddProducts/AddProducts";
import OnboardingComplete from "./OnboardingComplete/OnboardingComplete";

// * - VENDOR ONBOARDING STEPS -
// * For Stepper
const steps = [
  "Account Verification",
  "Meeting",
  "Contract",
  "Add Products",
  "Onboarding Complete",
];

// * For Component Rendering
const stepComponents = [
  <AccountVerification />,
  <Meeting />,
  <Contract />,
  <AddProducts />,
  <OnboardingComplete />,
];

// * - VendorStepper COMPONENT -
export default function VendorStepper() {
  // * - STATE -
  // For keeping track of the active / current step vendor is on
  const [activeStep, setActiveStep] = React.useState(0); // * Represents steps index

  // * - HELPER FUNCTIONS -
  // Handles progression to the next step in the multi-step process
  const handleNext = () => {
    // Increment the active step by 1
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }; // end handleNext

  // Handles going back to previous step
  const handleBack = () => {
    // Decrement the active step by 1
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }; // end handleBack

  // Handles resetting stepper
  const handleReset = () => {
    // Reset the active step to the first step
    setActiveStep(0);
  }; // end handleReset

  // * - RENDERING -
  return (
    <Box sx={{ width: "100%" }}>
      {/* Rendering Stepper */}
      <div style={{ width: "90%", margin: "2rem auto" }}>
        <Stepper activeStep={activeStep}>
          {/* Iterating over each step with it's name. Index and stepAttributes here for future customization flexibility.
            Ex: if (index === 0) { stepAttributes.style = { backgroundColor: 'lightblue' } } */}
          {steps.map((label, index) => {
            const stepAttributes = {};
            // Rendering each step with a key and potential customized attributes (stepAttributes)
            return (
              <Step key={label} {...stepAttributes}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      {/* Rendering steps */}
        {/* Render the current step component */}
        <div>
          {/* When active step changes, so does the component */}
          {stepComponents[activeStep]}
        </div>

        {/* Rendering Buttons */}
        <Box
          sx={{
            margin: "3rem auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "2px",
          }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
    </Box>
  );
}
