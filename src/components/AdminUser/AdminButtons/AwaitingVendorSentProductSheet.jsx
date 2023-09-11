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

function AwaitingVendorSentProductSheet({
  vendor,
  vendorEmail,
  dateEdited,
  onClose,
}) {
  const dispatch = useDispatch();

  const sendFollowUpToVendor = () => {
    const subject = "Awaiting Your Product Spreadsheets"; // replace with the subject
    const body =
      "Hi, following up if you have any questions or need anything regarding filling out your product spreadsheets"; // replace with the email body

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
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.16)",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <Typography variant="h7" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
          <span style={{ fontWeight: "bold", color: "rgba(0, 0, 0, 0.6)" }}>
            Account last active on:{" "}
          </span>{" "}
          {format(new Date(dateEdited), "MM/dd/yyyy")}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.16)",
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
        <Box>
          <DenyApplication vendor={vendor} onClose={onClose} />
        </Box>
      </Box>
    </>
  );
}

export default AwaitingVendorSentProductSheet;
