// * - IMPORTING -
// React
import React from "react";
// MUI
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// * - AccountVerification COMPONENT -
function AccountVerification({ status, handleNext }) {
  // Testing of dynamic status and messaging
  status = "Approved Intake Form";

  // * - DECLARATIONS -
  // Switch statement for setting vendor status message depending on status
  const accountVerificationMessage = (state = "", status) => {
    switch (status) {
      case "Intake Form Submitted":
        return (
          <div className="vendor-step-messaging-container">
            <p>"Your application is currently being reviewed."</p>
          </div>
        );
      case "Approved Intake Form":
        return (
          <div className="vendor-step-messaging-container">
            <p>Your account has been verified!</p>
            <Button onClick={handleNext}>
              Next Step
              <NavigateNextIcon />
            </Button>
          </div>
        );
      default:
        return state;
    }
  };

  // * - RENDERING -
  return (
    <div className="vendor-step-container">
      <header className="vendor-step-header">
        {/* Step Heading */}
        <h1>Account Verification</h1>

        {/* Status */}
        <p className="vendor-step-status">
          <strong>Status:</strong> {status}
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
