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
import { format } from "date-fns";

import DenyApplication from "../AdminButtons/DenyApplication";

function DeniedApplicationStatus({ vendor, vendorEmail, dateEdited, onClose }) {
  const dispatch = useDispatch();

  const sendFollowUpToVendor = () => {
    // To hardcode the Application Denied email, edit/add the following:
    // const subject = "Follow Up To Application Decision"; // replace with the subject
    // const body =
    //   "Hi, following up if you have any questions or need anything regarding your application being denied"; // replace with the email body

    // Log the values before sending the email
    console.log("Vendor:", vendor);
    console.log("Vendor Email:", vendorEmail);
    console.log("Vendor Email:", vendorEmail);
    // To hardcode the Application Denied email, add the following to log the email's subject and body:
    // console.log("Subject:", subject);
    // console.log("Body:", body);

    // Construct the mailto link WITHOUT the subject and body;
    // Encode the subject and body for the mailto URL to handle special characters
    // const emailToVendor = `mailto:${vendorEmail}?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;

    // Create a mailto link that prefills only the vendor's email
    const emailToVendor = `mailto:${vendorEmail}`;

    // Open the default email service of the admin user in a new tab
    // TODO: UNCOMMENT BEFORE SENDING TO CLIENT
    window.location.href = emailToVendor

    // Close modal
    onClose();
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EBD6D5",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Typography variant="h7" sx={{ color: "#d3306a" }}>
          <span style={{ fontWeight: "bold", color: "#d3306a" }}>
            Application Denied:{" "}
          </span>{" "}
          {format(new Date(dateEdited), "MM/dd/yyyy")}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#EBD6D5",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "8px 25px 25px 25px",
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
                icon="mdi:email-fast-outline"
                color="white"
                width="24"
                height="24"
                sx={{ mr: 1 }}
              />
            }
            onClick={sendFollowUpToVendor}
          >
            Send Follow Up Email
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default DeniedApplicationStatus;
