import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container, Divider, Grid, Modal, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import LinkEmailSender from "../../EmailComponent/EmailComponent";

function ApproveIntakeForm({ vendor, onClose }) {
  const dispatch = useDispatch();

  const handleApprovedIntakeForm = () => {
    const approvedIntakeForm = "Approved Intake Form";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendor.id, newOnboardingStage: approvedIntakeForm },
    });
    onClose();
  };

  return (
    <>
    <Container>
    <Box>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#D29E9D",
        "&:hover": {
          backgroundColor: "#944B49",
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
    <LinkEmailSender />
    </Box>
    </Container>
    </>
  );
}

export default ApproveIntakeForm;
