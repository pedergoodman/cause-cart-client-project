import React, { useState } from "react";
import {
  Box,
  Button
} from "@mui/material";
import { Icon } from "@iconify/react";

import DenyApplication from "../AdminButtons/DenyApplication";
import SendContractLink from "./SendContractLink";

function SendContract({ vendor, onClose }) {
  // State to manage modal visibility
  const [openModal, setOpenModal] = useState(false);

  // Callback to open the modal
  const openSendContractLinkModal = () => {
    setOpenModal(true);
  };

  const handleChildCancel = () => {
    setOpenModal(false); // Close only the child modal (SendContractLink)
  };

  const handleSendContract = () => {
    openSendContractLinkModal();
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
                icon="fluent:document-arrow-right-24-regular"
                color="white"
                width="24"
                height="24"
                sx={{ mr: 1 }}
              />
            }
            onClick={handleSendContract}
          >
            Select Contract
          </Button>
        </Box>
        <Box>
          <DenyApplication vendor={vendor} onClose={onClose} />
        </Box>
      </Box>

      {/* Render the SendContractLink modal */}
      <SendContractLink
        open={openModal}
        vendor={vendor}
        vendorEmail={vendor.email}
        onClose={onClose}
        onChildCancel={handleChildCancel}
      />
    </>
  );
}

export default SendContract;
