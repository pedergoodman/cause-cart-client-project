// * - IMPORTING -
// React
import React, { useState } from "react";

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
        message =
          "Thank you for submitting your application! It's currently under review, and we're working diligently to process it. ";
        return (
          <div className="vendor-step-messaging-container">
            <p>{message}</p>
          </div>
        );
      default:
        return message;
    }
  }; // end accountVerificationMessage

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
