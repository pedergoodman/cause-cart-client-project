// * - IMPORTING -
// React
import React, { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// CSS
import "../VendorStepper/VendorStepper.css";
// MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
// Components
import AccountVerification from "./AccountVerification/AccountVerification";
import Meeting from "./Meeting/Meeting";
import Contract from "./Contract/Contract";
import AddProducts from "./AddProducts/AddProducts";
import OnboardingComplete from "./OnboardingComplete/OnboardingComplete";

// * - VendorStepper COMPONENT -
export default function VendorStepper() {
  // * - DECLARATIONS -
  const user = useSelector((store) => store.user); // declaring user from redux store
  const vendorReducer = useSelector((store) => store.vendorReducer); // declaring vendorReducer from redux store
  const dispatch = useDispatch(); // declaring useDispatch as variable
  // Declaring vendor information as variable
  const vendorInfo = vendorReducer[0];

  // * - STATE -
  // For keeping track of the active / current step vendor is on
  const [activeStep, setActiveStep] = useState(0); // * Represents steps index

  // * - HELPER FUNCTIONS -

  // * Sending dispatch on page load to retrieve all information of logged in vendor
  // * Conditional for setting stepper steps
  useEffect(() => {
    dispatch({ type: "FETCH_VENDOR_INFO", payload: { userID: user.id } }); // going to login saga
    
    // Set activeStep to Meeting when status is "Approved Intake Form"
    vendorInfo?.status === "Approved Intake Form" && setActiveStep(1);
  }, [dispatch, vendorInfo?.status]);


  // * Stepper Functions
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
    <AccountVerification
      status={vendorInfo?.status}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      userID={user.id}
    />,
    <Meeting
      status={vendorInfo?.status}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      userID={user.id}
    />,
    <Contract
      status={vendorInfo?.status}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      userID={user.id}
    />,
    <AddProducts
      status={vendorInfo?.status}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      userID={user.id}
    />,
    <OnboardingComplete status={vendorInfo?.status} />,
  ];

  // * Testing of dynamic status and messaging
  if (vendorInfo) {
    vendorInfo.status = "Approved Intake Form";
    // vendorInfo.status = "Sent Contract";
    // vendorInfo.status = "Contract Submitted";
    // vendorInfo.status = "Sent Product Spreadsheet";
  }

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

      {/* Conditional */}
      {/* If vendorInfo status  render Account Verification component  */}
      {vendorInfo?.status === "Intake Form Submitted"
        ? stepComponents[0]
        : null}
      {/* If vendorInfo status "Approved Intake Form" render Meeting component  */}
      {vendorInfo?.status === "Approved Intake Form" && stepComponents[1]}

      {/* If vendorInfo status "Sent Contract" render Contract component  */}
      {/* If vendorInfo status "Contract Submitted" render Contract component  */}
      {/* If vendorInfo status "Sent Product Spreadsheet" render Add Products component  */}
      {/* If vendorInfo status "Product Spreadsheet Submitted" render OnboardingComplete component, set status to "Onboarding Complete"  */}
      {/* If vendorInfo status "Onboarding Complete" render OnboardingComplete component  */}

      {/* {stepComponents[activeStep]} */}

      {/* Buttons for Navigating Steps (Will remove in final release) */}
      {/* Comment/Uncomment to toggle navigation */}
      <Box className="vendor-stepper-navigation-buttons-container">
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
