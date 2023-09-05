import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";

import { Icon } from "@iconify/react";

function DenyApplication({ vendor, onClose }) {
  const dispatch = useDispatch();

  const handleDeniedApplication = () => {
    const deniedVendorApplication = "Denied Application";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendor.id, newOnboardingStage: deniedVendorApplication },
    });
    onClose();
  };

  return (
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
          icon="octicon:x-circle-fill-16"
          color="white"
          width="20"
          height="20"
          sx={{ mr: 1 }}
        />
      }
      onClick={handleDeniedApplication}
    >
      Deny Application
    </Button>
  );
}

export default DenyApplication;
