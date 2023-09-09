// * - IMPORTING -
// React
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// MUI
import { Button } from "@mui/material";

// * - AddProducts COMPONENT -
function AddProducts({ status, setActiveStep }) {
  const dispatch = useDispatch();

  // Testing of dynamic status and messaging
  // status = "Approved Intake Form";

  useEffect(() => {
    dispatch({ type: "FETCH_ADMIN_TEMPLATES" });
  }, []);

  // from redux store
  const productSheetLinks = useSelector(store => store.templateLinkReducer);
  const vendorId = useSelector(store => store.vendorReducer.vendorId);
  const userId = useSelector(store => store.user);
  const dropboxFolderPath = useSelector(store => store.vendorReducer.dropboxFolderPath)

  // set product template folder link
  const filteredProductLink = productSheetLinks.filter(linkObject => {
    return linkObject.type == "product templates";
  });
  const productSheetLink = filteredProductLink[0]?.link;

  // store upload files
  const [files, setFiles] = useState();

  const handleSubmitProductSheet = () => {
    const newOnboardingStage = "Product Spreadsheet Submitted";

    console.log("dropboxFolderPath is", dropboxFolderPath);
    console.log("newOnboardingStage is:", newOnboardingStage);
    console.log("vendorId is:", vendorId);

    console.log('files = ', files);

    dispatch({
      type: "UPLOAD_FILE_TO_DROPBOX",
      payload: { files, dropboxFolderPath },
    });


    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendorId, newOnboardingStage, userId: userId.id },
    });
  };

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

            <div className="links-and-link-buttons-container">  
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Upload Products(s)</h2>
                <a
                  className="links-and-link-buttons"
                  target="_blank"
                  href={productSheetLink}
                >
                  Download Product Templates
                </a>
              </div>

              {/* Upload: On click will allow vendor to select files to upload */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "30px",
                }}
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
                <Button className="buttons" onClick={handleSubmitProductSheet}>
                  Upload Product Form(s)
                </Button>
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
