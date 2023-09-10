import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Modal,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";

import DenyApplication from "./DenyApplication";

function SendProductTemplates({ vendor, vendorEmail, onClose }) {
  const dispatch = useDispatch();

  const sendProductTemplateToVendor = () => {
    const sentProductTemplate = "Sent Product Spreadsheet";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendor.id, newOnboardingStage: sentProductTemplate },
    });

    const subject = "Product Template"; // replace with the subject
    const body = "Hi here's your product templates to review and fill out"; // replace with the email body

    // Log the values before sending the email
    console.log("Vendor:", vendor);
    console.log("Vendor Email:", vendorEmail);
    console.log("Subject:", subject);
    console.log("Body:", body);

    // Construct the mailto link
    // Encode the subject and body for the mailto URL to handle special characters
    const emailToVendor = `mailto:${vendorEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email service of the admin user in a new tab
    // window.open(emailToVendor, "_blank");

    // Close modal
    onClose();
  };

  return (
    <>
      <Box>
        {/* TODO: INSERT DROPBOX API and/or COMPONENT FOR PRODUCT TEMPLATES */}
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFE6D9",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "25px",
        }}
      >
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3D9296",
              "&:hover": {
                backgroundColor: "#286264",
              },
            }}
            startIcon={
              <Icon
                icon="fluent:document-table-cube-20-regular"
                color="white"
                width="24"
                height="24"
                sx={{ mr: 1 }}
              />
            }
            onClick={sendProductTemplateToVendor}
          >
            Send Product Spreadsheet
          </Button>
        </Box>
        <Box>
          <DenyApplication vendor={vendor} onClose={onClose} />
        </Box>
      </Box>
    </>
  );
}

export default SendProductTemplates;
