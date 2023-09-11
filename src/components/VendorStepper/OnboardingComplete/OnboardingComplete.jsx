// * - IMPORTING -
// React
import { Button } from "@mui/material";
import React, { useState } from "react";

// * - OnboardingComplete COMPONENT -
function OnboardingComplete({ status, setActiveStep }) {
  // Testing of dynamic status and messaging
  // status = "Approved Intake Form";

  // * - DECLARATIONS -
  // Switch statement for setting vendor status message depending on status
  const onboardingComplete = (state = "", status) => {
    // Variable for changing/showing message
    let message = state;

    switch (status) {
      case "Onboarding Complete":
        // New message
        // TODO: Change to actual website name in message
        message =
          "Congratulations!🥳 You've completed the onboarding process. We're thrilled to have you as part of Cause-Cart! Please click the links below to register your official vendor account and sign up on Stripe for payment information.";
        // Render
        return (
          <>
            {/* Step Header */}
            <header className="vendor-step-header">
              {/* Step Heading */}
              <h1>Onboarding Complete</h1>

              {/* Status */}
              <p className="vendor-step-status">
                <strong>Status:</strong> {status}
              </p>
            </header>
            <main>
              <div className="vendor-step-messaging-container">
                {/* Message */}
                <p>{message}</p>

                <ul className="links-and-link-buttons-container">
                  <li style={{ listStyle: "none" }}>
                    <a
                      className="links-and-link-buttons"
                      target="_blank"
                      href="https://cause-cart.com/Account/Register"
                    >
                      Cause-Cart Vendors
                    </a>
                  </li>
                  {/* // TODO: Change to actual website name and href link */}
                  <li style={{ listStyle: "none" }}>
                    <a
                      className="links-and-link-buttons"
                      target="_blank"
                      href="https://stripe.com/"
                    >
                      Stripe
                    </a>
                  </li>
                </ul>
              </div>
            </main>
          </>
        );
      case "Denied Application":
        // New message
        message =
          "We regret to inform you that your vendor application with Cause-Cart has been declined. You are welcome to reapply, and we will consider your application for future approval.";
        // Render
        return (
          <>
            {/* Step Header */}
            <header className="vendor-step-header">
              {/* Step Heading */}
              <h1>Onboarding Denied</h1>

              {/* Status */}
              <p className="vendor-step-status">
                <strong>Status:</strong> {status}
              </p>
            </header>
            <main>
              <div className="vendor-step-messaging-container">
                {/* Message */}
                <p>{message}</p>
              </div>
            </main>
          </>
        );
      default:
        return message;
    }
  }; // end onboardingCompleteMessage

  // * - RENDERING -
  return (
    <div className="vendor-step-container">
      {onboardingComplete("", status)}
    </div>
  );
} // * - END OnboardingComplete COMPONENT -

// * Exporting OnboardingComplete Component
export default OnboardingComplete;
