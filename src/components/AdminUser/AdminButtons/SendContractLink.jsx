import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Modal,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Icon } from "@iconify/react";

function SendContractLink({
  open,
  onClose,
  vendor,
  vendorEmail,
  onChildCancel,
}) {
  const dispatch = useDispatch();
  const [consignmentChecked, setConsignmentChecked] = useState(false);
  const [vendorChecked, setVendorChecked] = useState(false);
  const [error, setError] = useState(false);
  const [closeChildOnly, setCloseChildOnly] = useState(false);


  const sendContractEmailToVendor = () => {
    const sentContract = "Sent Contract";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendor.id, newOnboardingStage: sentContract, userId: vendor.userId},
    });

    // Create vendor folder on dropbox
    dispatch({
      type: "CREATE_VENDOR_FOLDER",
      payload: { vendorId: vendor.id, vendorName: vendor.vendorName  },
    });


    // const subject = "Vendor Approved: Calendly Link"; // replace with the subject
    // const body = "Hi here's a copy of the calendly link"; // replace with the email body
    
    // ! this is here to prevent an undefined error
    const subject = '';
    const body = '';


    // Log the values before sending the email
    // console.log("Vendor:", vendor);
    // console.log("Vendor Email:", vendorEmail);
    // console.log("Subject:", subject);
    // console.log("Body:", body);

    // Construct the mailto link
    // Encode the subject and body for the mailto URL to handle special characters
    const emailToVendor = `mailto:${vendorEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email service of the admin user in a new tab
    window.open(emailToVendor, "_blank");

    // Close both modals using the passed callback
    handleClose();
  };

  const handleFormSubmit = () => {
    // Check if at least one checkbox is checked
    if (!consignmentChecked && !vendorChecked) {
      setError(true);
      return;
    }

    console.log("Form submitted");
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
              Send Contract to Vendor?
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
                    Send Consignment Agreement Link:
                  </span>
                  {/* TODO: Send Consignment Agreement Link Explanation // Prefills the vendor's email, subject line, and message with
                  your Calendly link. */}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <span style={{ fontWeight: "bold" }}>
                    Send Vendor Agreement Link:
                  </span>
                  {/* TODO: Send Vendor Agreement Link Explanation // Prefills the vendor's email, subject line, and message in your
                  default email service. */}
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
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={consignmentChecked}
                  onChange={(e) => {
                    setConsignmentChecked(e.target.checked);
                    setError(false);
                  }}
                />
              }
              label="Consignment Agreement"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vendorChecked}
                  onChange={(e) => {
                    setVendorChecked(e.target.checked);
                    setError(false);
                  }}
                />
              }
              label="Vendor Agreement"
            />
            {error && (
              <FormHelperText error={true}>
                At least one option should be selected.
              </FormHelperText>
            )}
          </FormGroup>
          {/* TODO: EVENT SEQUENCE THIS TO SEND CONTRACT ? */}
          <button onClick={handleFormSubmit}>Submit</button>
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
            onClick={sendContractEmailToVendor}
          >
            Send Contract
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

export default SendContractLink;
