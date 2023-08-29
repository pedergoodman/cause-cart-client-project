import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { Badge, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const DetailsModalHeader = ({ onboardingStage, tasksCount }) => {
  return (
    <>
      <Typography variant="h6">Onboarding Stage: {onboardingStage}</Typography>
      <Button variant="contained" color="primary">
        Pending Tasks{" "}
        <Badge badgeContent={tasksCount} color="error">
          <WarningIcon />
        </Badge>
      </Button>
      </>
  );
};

export default DetailsModalHeader;
