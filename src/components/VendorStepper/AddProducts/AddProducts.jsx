// * - IMPORTING -
// React
import React, { useState } from "react";
// MUI
import { Button } from "@mui/material";

// * - AddProducts COMPONENT -
function AddProducts({ status, setActiveStep }) {
  // Testing of dynamic status and messaging
  // status = "Approved Intake Form";

  // * - DECLARATIONS -
  // State variable to hold the final status of this step
  const [finalStatus, setFinalStatus] = useState("");
  // Switch statement for setting vendor status message depending on status
  const addProductsMessage = (state = "", status) => {
    // Variable for changing/showing message
    let message = state;

    switch (status) {
      case "Sent Product Spreadsheet":
        // New message
        message =
          "Welcome to the Cause-Cart vendor community!✨ You're now an official vendor. Follow the link below to choose from a variety of product categories and complete the corresponding forms with your item details to start selling your products live on our platform.";
        return (
          <>
            {/* Message */}
            <div className="vendor-step-messaging-container">
              <p>{message}</p>
            </div>

            {/* Add Products */}
            <div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  <strong>Add Products(s):</strong>
                </p>
                <li>
                  <a
                    className="links-and-link-buttons"
                    target="_blank"
                    href="https://www.dropbox.com/scl/fo/yw434q1cn2nuz7gwdcfi0/h?rlkey=u5g1pfgpzdimtwus80u74k1h1&dl=0"
                  >
                    Product Categories
                  </a>
                </li>
              </ul>

              {/* Upload: On click will allow vendor to select files to upload */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button className="buttons">Upload Product Forms</Button>
              </div>
            </div>
          </>
        );
      case "Product Spreadsheet Submitted":
        // New message
        message =
          "Great job! You've added all of your products. They will now undergo review and be added to the store.";
        return (
          /* Message */
          <div className="vendor-step-messaging-container">
            <p>{message}</p>
          </div>
        );
      default:
        return message;
    }
  }; // end addProductsMessage

  // * - RENDERING -
  return (
    <div className="vendor-step-container">
      <header className="vendor-step-header">
        {/* Step Heading */}
        <h1>Add Products</h1>

        {/* Status */}
        <p className="vendor-step-status">
          <strong>Status:</strong> {finalStatus ? finalStatus : status}
        </p>
      </header>

      <main>
        {/* Vendor Onboarding Message */}
        <div>{addProductsMessage("", status)}</div>
      </main>
    </div>
  );
} // * - END AddProducts COMPONENT -

// * Exporting AddProducts Component
export default AddProducts;
