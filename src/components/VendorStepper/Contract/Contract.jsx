// * - IMPORTING -
// React
import React, { useState } from "react";
// MUI
import { Button } from "@mui/material";

// * - Contract COMPONENT -
function Contract({ status, setActiveStep }) {
  // Testing of dynamic status and messaging
  // status = "Approved Intake Form";

  // * - DECLARATIONS -
  // State variable to hold the final status of this step
  const [finalStatus, setFinalStatus] = useState("");
  // Switch statement for setting vendor status message depending on status
  const contractMessage = (state = "", status) => {
    // Variable for changing/showing message
    let message = state;

    switch (status) {
      case "Sent Contract":
        // New message
        message =
          "Great news! You've successfully completed the vendor approval process. Now, all you need to do is sign the provided contract(s) and upload it to officially join the Cause-Cart family as a vendor. We're excited to have you on board!";
        return (
          <>
            {/* Message */}
            <div className="vendor-step-messaging-container">
              <p>{message}</p>
            </div>

            {/* Contracts */}
            {/* // ? Not sure if both contracts will be an option or just one */}
            {/* // ? Also for all links, will we need the actual ones from her, like these dropbox ones */}
            <div>
              <ol
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  <strong>Contract(s):</strong>
                </p>
                <li>
                  <a
                    className="links-and-link-buttons"
                    target="_blank"
                    href="https://www.dropbox.com/scl/fi/a2ql6gtl5mu4uuaxn0uod/Cause-Cart-Consignment-Agreement.pdf?rlkey=azcb8d6qu2991smm260ue5b89&dl=0"
                  >
                    Consignment Agreement
                  </a>
                </li>
                <li>
                  <a
                    className="links-and-link-buttons"
                    target="_blank"
                    href="https://www.dropbox.com/scl/fi/lqypzmz6cdqavs7hrgrxj/Vendor-Agreement.pdf?rlkey=skccrco7cwclgxmsuhenu6rx1&dl=0"
                  >
                    Vendor Agreement
                  </a>
                </li>
              </ol>

              {/* Upload: On click will allow vendor to select files to upload */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button className="buttons">Upload Signed Contracts</Button>
              </div>
            </div>
          </>
        );
      case "Contract Submitted":
        // New message
        message =
          "Thank you for filling out the agreements. Please wait patiently while we review them.";
        return (
          /* Message */
          <div className="vendor-step-messaging-container">
            <p>{message}</p>
          </div>
        );
      default:
        return message;
    }
  }; // end contractMessage

  // * - RENDERING -
  return (
    <div className="vendor-step-container">
      <header className="vendor-step-header">
        {/* Step Heading */}
        <h1>Contract Agreement</h1>

        {/* Status */}
        <p className="vendor-step-status">
          <strong>Status:</strong> {finalStatus ? finalStatus : status}
        </p>
      </header>

      <main>
        {/* Vendor Onboarding Message */}
        <div>{contractMessage("", status)}</div>
      </main>
    </div>
  );
} // * - END Contract COMPONENT -

// * Exporting Contract Component
export default Contract;
