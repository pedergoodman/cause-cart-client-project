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

function CompletedOnboardingStatus({
  vendor,
  vendorEmail,
  dateEdited,
  onClose,
}) {
  function getLastActive(dateEdited) {
    console.log("Vendor was last active on: ", dateEdited);
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#3D9296",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "25px",
        }}
      >
        <Typography variant="h7" sx={{ color: "rgb(220, 235, 235)" }}>
          <span style={{ fontWeight: "bold", color: "rgb(220, 235, 235)" }}>
            Application Completed:{" "}
          </span>
          {format(new Date(dateEdited), "MM/dd/yyyy")}
        </Typography>
      </Box>
    </>
  );
}

export default CompletedOnboardingStatus;
