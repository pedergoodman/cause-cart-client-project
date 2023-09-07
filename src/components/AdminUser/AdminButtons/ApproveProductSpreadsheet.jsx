import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { Icon } from "@iconify/react";

import DenyApplication from "./DenyApplication";
import CompleteOnboarding from "./CompleteOnboarding";

function ApproveProductSpreadsheet({ vendor, onClose }) {
  // State to manage modal visibility
  const [openModal, setOpenModal] = useState(false);

  // Callback to open the modal
  const openCompleteOnboardingModal = () => {
    setOpenModal(true);
  };

  const handleChildCancel = () => {
    setOpenModal(false); // Close only the child modal (SendMeetingInvite)
  };

  const handleApprovedProductSpreadsheet = () => {
    openCompleteOnboardingModal();
  };

  return (
    <>
      <Box>
        {/* TODO: INSERT DROPBOX API and/or COMPONENT TO REVIEW VENDOR SUBMITTED PRODUCT SPREADSHEETS */}
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
                icon="fluent:box-checkmark-20-regular"
                color="white"
                width="24"
                height="24"
                sx={{ mr: 1 }}
              />
            }
            onClick={handleApprovedProductSpreadsheet}
          >
            Approve Product Spreadsheet
          </Button>
        </Box>
        <Box>
          <DenyApplication vendor={vendor} onClose={onClose} />
        </Box>
      </Box>

      {/* Render the CompleteOnboarding modal */}
      <CompleteOnboarding
        open={openModal}
        vendor={vendor}
        vendorEmail={vendor.email}
        onClose={onClose}
        onChildCancel={handleChildCancel}
      />
    </>
  );
}

export default ApproveProductSpreadsheet;
