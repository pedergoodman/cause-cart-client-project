// * - IMPORTING -
// React
import React, { useState } from "react";
import BaseButton from "../../muiThemeStyles/buttonStyles"; // Import the BaseButton component
import { Button, ButtonBase } from "@mui/material"; // button theme
// Components

// * - Meeting COMPONENT -
function Meeting({ status, setActiveStep }) {
  // Testing of dynamic status and messaging
  // status = "Approved Intake Form";

  // * - DECLARATIONS -
  // Switch statement for setting vendor status message depending on status
  const meetingMessage = (state = "", status) => {
    // Variable for changing/showing message
    let message = state;

    switch (status) {
      case "Approved Intake Form":
        // New message
        message =
          "Congratulations! Your account has been successfully verified! 🎉 Now, you have the option to schedule a meeting with one of our friendly Cause-Cart representatives for a quick chat. Feel free to use the link below or check your email for further instructions. We look forward to assisting you on your journey with us!";
        return (
          <div className="vendor-step-messaging-container">
            <p>{message}</p>
            {/* // ? Mess around with MUI button theme */}
            {/* <BaseButton>Schedule a Meeting</BaseButton> */}

            {/* // TODO: Change link to actual calendly link  */}
            <Button className="buttons">
              <a
                className="links-and-link-buttons"
                style={{ color: "white", textDecoration: "none" }}
                href="https://calendly.com/"
                target="_blank"
              >
                Schedule a Meeting
              </a>
            </Button>
          </div>
        );
      default:
        return message;
    }
  }; // end meetingMessage

  // * - RENDERING -
  return (
    <div className="vendor-step-container">
      <header className="vendor-step-header">
        {/* Step Heading */}
        <h1>Meeting</h1>

        {/* Status */}
        <p className="vendor-step-status">
          <strong>Status:</strong> {status}
        </p>
      </header>

      <main>
        {/* Vendor Onboarding Message */}
        <div>{meetingMessage("", status)}</div>
      </main>
    </div>
  );
} // * - END Meeting COMPONENT -

// * Exporting Meeting Component
export default Meeting;
