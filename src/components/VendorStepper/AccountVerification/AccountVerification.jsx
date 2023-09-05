// * - IMPORTING -
// React
import React, { useState } from "react";
// MUI
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// * - AccountVerification COMPONENT -
function AccountVerification({ status, setActiveStep }) {
  // Testing of dynamic status and messaging
  // status = "Approved Intake Form";

  // * - DECLARATIONS -
  // State variable to hold the final status of this step
  const [finalStatus, setFinalStatus] = useState("");
  // Switch statement for setting vendor status message depending on status
  const accountVerificationMessage = (state = "", status) => {
    // Variable for changing/showing message
    let message = state;

    switch (status) {
      case "Intake Form Submitted":
        // New message
        message = "Your application is currently being reviewed.";
        return (
          <div className="vendor-step-messaging-container">
            <p>{message}</p>
          </div>
        );
      case "Approved Intake Form":
        // New message
        message = "Your account has been verified!";
        return (
          <div className="vendor-step-messaging-container">
            <p>{message}</p>
            <Button onClick={handleNextStep}>
              Next Step
              <NavigateNextIcon />
            </Button>
          </div>
        );
      default:
        return message;
    }
  }; // end accountVerificationMessage

  // Handles progression to the next step in the multi-step process
  const handleNextStep = () => {
    // Increment the active step by 1
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    // Set new vendor status via dispatch
  }; // end handleNextStep

  // * - RENDERING -
  return (
    <div className="vendor-step-container">
      <header className="vendor-step-header">
        {/* Step Heading */}
        <h1>Account Verification</h1>

        {/* Status */}
        <p className="vendor-step-status">
          <strong>Status:</strong> {finalStatus ? finalStatus : status}
        </p>
      </header>

      <main>
        {/* Vendor Onboarding Message */}
        <div>{accountVerificationMessage("", status)}</div>
      </main>
    </div>
  );
} // * - END AccountVerification COMPONENT -

// * Exporting AccountVerification Component
export default AccountVerification;
