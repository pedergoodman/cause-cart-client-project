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

function SendMeetingInvite({
  open,
  onClose,
  vendor,
  vendorEmail,
  onChildCancel,
}) {
  const dispatch = useDispatch();

  const [closeChildOnly, setCloseChildOnly] = useState(false);

  const sendMeetingLink = () => {
    const approvedIntakeForm = "Approved Intake Form";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendor.id, newOnboardingStage: approvedIntakeForm },
    });

    // To hardcode the Send Calendly Link email, edit/add the following:
    const subject = "Cause-Cart: Take a moment to get to know each other"; // replace with the subject
    const body = `Hello, please click on the link to setup a meeting https://calendly.com/cause-cart`; // replace with the email body

    // Log the values before sending the email
    console.log("Vendor:", vendor);
    console.log("Vendor Email:", vendorEmail);
    // To hardcode the Send Calendly Link email, add the following to log the email's subject and body:
    // console.log("Subject:", subject);
    // console.log("Body:", body);

    // To hardcode the Send Calendly Link email, edit/add the following:
    // Construct the mailto link
    // Encode the subject and body for the mailto URL to handle special characters
    const emailToVendor = `mailto:${vendorEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Create a mailto link that prefills only the vendor's email
    // const emailToVendor = `mailto:${vendorEmail}`;

    // Open the default email service of the admin user in a new tab
    // TODO: UNCOMMENT BEFORE SENDING TO CLIENT
    window.open(emailToVendor, "_blank");

    // Close both modals using the passed callback
    handleClose();
  };

  // Callback to send approval notification only
  const sendApprovalNotification = () => {
    const approvedIntakeForm = "Approved Intake Form";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendor.id, newOnboardingStage: approvedIntakeForm },
    });

    // Log the values before sending the email
    console.log("Vendor:", vendor);
    console.log("Vendor Email:", vendorEmail);

    // Create a mailto link that prefills only the vendor's email
    const emailToVendor = `mailto:${vendorEmail}`;

    // Open the default email service of the admin user in a new tab
    // TODO: UNCOMMENT BEFORE SENDING TO CLIENT
    // window.open(emailToVendor, "_blank");

    // Close both modals using the passed callback
    handleClose();
  };

  const handleClose = () => {
    if (closeChildOnly) {
      // Close only the child component
      setCloseChildOnly(false);
      onChildCancel(); // Notify the parent about child cancellation
    } else {
      // Close both modals using the passed callback
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          maxHeight: "460px",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "25px",
          overflow: "auto",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          padding="25px"
          backgroundColor="#A7E4E7"
        >
          <Box>
            <Typography
              variant="h7"
              align="left"
              fontWeight="bold"
              marginLeft="8px"
            >
              Send Email to Vendor?
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          padding="0px 25px"
          backgroundColor="#FFF"
        >
          <Box>
            <List>
              <ListItem>
                <ListItemText>
                  <span style={{ fontWeight: "bold" }}>
                    Send Meeting Link:{" "}
                  </span>
                  Prefills the vendor's email, subject line, and message with
                  your Calendly link.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <span style={{ fontWeight: "bold" }}>
                    Send Approval Email:{" "}
                  </span>
                  Prefills the vendor's email, subject line, and message in your
                  default email service.
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "25px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#84ceff",
              "&:hover": {
                backgroundColor: "#549cff",
              },
            }}
            startIcon={
              <img
                src="images/calendlyIconColor.png"
                alt="Logo"
                style={{ height: "24px" }}
              />
            }
            onClick={sendMeetingLink}
          >
            Send Meeting Link
          </Button>
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
            onClick={sendApprovalNotification}
          >
            Send Approval Email
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFDECD",
              "&:hover": {
                backgroundColor: "#F9BC9E",
              },
            }}
            startIcon={
              <Icon
                icon="heroicons-solid:x"
                color="#747474"
                width="24"
                height="24"
                sx={{ mr: 1 }}
              />
            }
            onClick={onChildCancel}
          >
            <Typography color="#747474">Cancel</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default SendMeetingInvite;
