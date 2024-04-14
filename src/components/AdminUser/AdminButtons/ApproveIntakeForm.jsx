import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { Icon } from "@iconify/react";

import DenyApplication from "./DenyApplication";
import SendMeetingInvite from "./SendMeetingInvite"; // Import the SendMeetingInvite component

function ApproveIntakeForm({ vendor, onClose }) {
  // State to manage modal visibility
  const [openModal, setOpenModal] = useState(false);

  // Callback to open the modal
  const openSendMeetingInviteModal = () => {
    setOpenModal(true);
  };

  const handleChildCancel = () => {
    setOpenModal(false); // Close only the child modal (SendMeetingInvite)
  };

  const handleApprovedIntakeForm = () => {
    openSendMeetingInviteModal();
  };

  return (
    <>
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
                icon="mdi:clipboard-check-multiple-outline"
                color="white"
                width="24"
                height="24"
                sx={{ mr: 1 }}
              />
            }
            onClick={handleApprovedIntakeForm}
          >
            Approve Intake Form
          </Button>
        </Box>
        <Box>
          <DenyApplication vendor={vendor} onClose={onClose} />
        </Box>
      </Box>

      {/* Render the SendMeetingInvite modal */}
      <SendMeetingInvite
        open={openModal}
        vendor={vendor}
        vendorEmail={vendor.email}
        onClose={onClose}
        onChildCancel={handleChildCancel}
      />
    </>
  );
}

export default ApproveIntakeForm;
