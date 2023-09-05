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

function CompleteOnboarding({ vendor, onClose }) {
  const dispatch = useDispatch();

  const handleCompletedOnboarding= () => {
    const completedOnboarding = "Onboarding Complete";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: vendor.id, newOnboardingStage: completedOnboarding },
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
          icon="mdi:clipboard-check-multiple-outline"
          color="white"
          width="24"
          height="24"
          sx={{ mr: 1 }}
        />
      }
      onClick={handleCompletedOnboarding}
    >
      Onboarding Complete
    </Button>
  );
}

export default CompleteOnboarding;