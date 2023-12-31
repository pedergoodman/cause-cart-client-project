import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { format } from "date-fns";

import DenyApplication from "../AdminButtons/DenyApplication";

function AwaitingVendorSentContract({
  vendor,
  vendorEmail,
  dateEdited,
  onClose,
}) {
  const dispatch = useDispatch();

  const sendFollowUpToVendor = () => {
    // To hardcode the follow-up email, edit/add the following:
    // const subject = "Awaiting Vendor Contract Submission"; // replace with the subject
    // const body =
    //   "Hi, following up if you have any questions or need anything regarding your contract"; // replace with the email body

    // Log the values before sending the email
    console.log("Vendor:", vendor);
    console.log("Vendor Email:", vendorEmail);
    // To hardcode the follow-up email, add the following to log the email's subject and body:
    // console.log("Subject:", subject);
    // console.log("Body:", body);

    // To hardcode the follow-up email, edit/add the following:
    // Construct the mailto link
    // Encode the subject and body for the mailto URL to handle special characters
    // const emailToVendor = `mailto:${vendorEmail}?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;

    // Create a mailto link that prefills only the vendor's email
    const emailToVendor = `mailto:${vendorEmail}`;

    // Open the default email service of the admin user in a new tab
    window.location.href = emailToVendor

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
            Account last active on:
          </span>
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

export default AwaitingVendorSentContract;
