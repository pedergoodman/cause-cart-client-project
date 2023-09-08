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
import CustomStepIcon from "../CustomStepIcon";

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

    // Set current/active step to...
    // Meeting when status is "Approved Intake Form"
    vendorInfo?.status === "Approved Intake Form" && setActiveStep(1);
    // Contract when status is "Sent Contract"
    vendorInfo?.status === "Sent Contract" && setActiveStep(2);
    // Contract when status is "Contract Submitted"
    vendorInfo?.status === "Contract Submitted" && setActiveStep(2);
  // Add Products when status is "Sent Product Spreadsheet"
    vendorInfo?.status === "Sent Product Spreadsheet" && setActiveStep(3);
    // Add Products when status is "Product Spreadsheet Submitted"
    vendorInfo?.status === "Product Spreadsheet Submitted" && setActiveStep(3);
    // Add Products when status is "Product Spreadsheet Submitted"
    vendorInfo?.status === "Product Spreadsheet Submitted" && setActiveStep(3);
    // Onboarding Complete when status is "Onboarding Complete"
    vendorInfo?.status === "Onboarding Complete" && setActiveStep(5);
    // Onboarding Complete when status is "Denied Application"
    vendorInfo?.status === "Denied Application" && setActiveStep(4);
  }, [dispatch, vendorInfo?.status]);

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
  // * Use this via toggle on/off comments to view the various steps
  if (vendorInfo) {
    // vendorInfo.status = "Approved Intake Form";
    vendorInfo.status = "Sent Contract";
    vendorInfo.status = "Contract Submitted";
    vendorInfo.status = "Sent Product Spreadsheet";
    vendorInfo.status = "Product Spreadsheet Submitted";
    vendorInfo.status = "Onboarding Complete";
    // vendorInfo.status = "Denied Application";
  }

  // * - RENDERING -
  return (
    <Box sx={{ width: "100%" }}>
      {/* Rendering Stepper */}
      <div style={{ width: "90%", margin: "2rem auto" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            // Rendering each step with a key and customized icons
            return (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={CustomStepIcon}
                  denied={vendorInfo?.status === "Denied Application"}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      {/* Rendering steps */}
      {/* Render the current step component */}

      {/* - Conditional Step Component Rendering - */}
      {/* If vendorInfo status  render Account Verification component  */}
      {vendorInfo?.status === "Intake Form Submitted"
        ? stepComponents[0]
        : null}
      {/* If vendorInfo status "Approved Intake Form" render Meeting component  */}
      {vendorInfo?.status === "Approved Intake Form" && stepComponents[1]}
      {/* If vendorInfo status "Sent Contract" render Contract component  */}
      {vendorInfo?.status === "Sent Contract" && stepComponents[2]}
      {/* If vendorInfo status "Contract Submitted" render Contract component  */}
      {vendorInfo?.status === "Contract Submitted" && stepComponents[2]}
      {/* If vendorInfo status "Sent Product Spreadsheet" render Add Products component  */}
      {vendorInfo?.status === "Sent Product Spreadsheet" && stepComponents[3]}
      {/* If vendorInfo status "Product Spreadsheet Submitted" render OnboardingComplete component, set status to "Onboarding Complete"  */}
      {vendorInfo?.status === "Product Spreadsheet Submitted" &&
        stepComponents[3]}
      {/* If vendorInfo status "Onboarding Complete" render OnboardingComplete component  */}
      {vendorInfo?.status === "Onboarding Complete" && stepComponents[4]}
      {/* If vendorInfo status "Denied Application" render OnboardingComplete component  */}
      {vendorInfo?.status === "Denied Application" && stepComponents[4]}
    </Box>
  );
}
