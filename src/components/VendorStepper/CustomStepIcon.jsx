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
  const { active, completed } = props;

  const activeStepStyle = {
    color: "#ed6c02", 
  };

  // Conditional for rendering icons
  // Completed
  if (completed) {
    return <CheckCircleIcon style={{ color: "#F9BC9E" }} />;
  }

  return (
    <StepIcon
      icon={props.icon}
      sx={active ? activeStepStyle : {}} // Apply the activeStepStyle when active
    />
  );
} // * end CustomStepIcon

export default CustomStepIcon;
