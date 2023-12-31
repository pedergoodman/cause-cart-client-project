// * - IMPORTING -
// React
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// MUI
import { Button } from "@mui/material";

// * - Contract COMPONENT -
function Contract({ status, setActiveStep }) {
  const dispatch = useDispatch();

  // Testing of dynamic status and messaging
  // status = "Approved Intake Form";

  // from redux store
  const sentContractLink = useSelector(
    store => store.vendorReducer.sentContractLink
  );
  const sentLinkName = useSelector(store => store.vendorReducer.sentLinkName);
  const vendorId = useSelector(store => store.vendorReducer.vendorId);
  const userId = useSelector(store => store.user);
  const dropboxFolderPath = useSelector(
    store => store.vendorReducer.dropboxFolderPath
  );

  // local state
  const [files, setFiles] = useState([]);
  const [uploadError, setUploadError] = useState(false);

  // * CLICK FUNCTIONS

  const handleSubmitContract = () => {
    const newOnboardingStage = "Contract Submitted";

    if (files[0]) {
      setUploadError(false);

      dispatch({
        type: "UPLOAD_CONTRACT_TO_DROPBOX",
        payload: { files, dropboxFolderPath },
      });

      dispatch({
        type: "UPDATE_ONBOARDING_STAGE",
        payload: { id: vendorId, newOnboardingStage, userId: userId.id },
      });
    
    } else {
      setUploadError(true);
    }
  };

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
            <div className="links-and-link-buttons-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Sign Contract</h2>
                <a
                  className="links-and-link-buttons"
                  target="_blank"
                  href={sentContractLink}
                >
                  Download {sentLinkName}
                </a>
              </div>

              {/* Upload: On click will allow vendor to select files to upload */}
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "30px",
                }}
                enctype="multipart/form-data"
              >
                <input
                  type="file"
                  name="dropbox-upload"
                  id="dropbox-upload"
                  multiple
                  onChange={e => {
                    setFiles(e.target.files);
                  }}
                />
                <Button
                  className="buttons"
                  sx={{ m: "4px 0 -10px 0" }}
                  onClick={handleSubmitContract}
                >
                  Upload Signed Contract
                </Button>
                {uploadError ? (
                  <p style={{ color: "#d13323" }}>*Please add a file</p>
                ) : (
                  <></>
                )}
              </form>
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
