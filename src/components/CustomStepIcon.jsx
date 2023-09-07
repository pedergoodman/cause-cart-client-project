// * -  IMPORTING -
// React
import React from "react";
// MUI
import StepIcon from "@mui/material/StepIcon";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// * - CustomStepIcon COMPONENT -
function CustomStepIcon(props) {
  // * - STATE -
  // States of completed active and denied stepper steps
  const { active, completed, denied } = props;

  // Conditional for rendering icons
  // Denied
  if (denied) {
    return <CancelIcon style={{ color: "grey" }} />;
  }
  // Completed
  if (completed) {
    return <CheckCircleIcon style={{ color: "green" }} />;
  }

  // ? Make one for active

  return <StepIcon {...props} />;
} // * end CustomStepIcon

export default CustomStepIcon;
