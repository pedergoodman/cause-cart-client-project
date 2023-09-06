// * - IMPORTING -
// React
import React from "react";
// Redux
import { useDispatch } from "react-redux";
// MUI
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// Components

// * - NextButtonToMeetingStep COMPONENT -
function NextButtonToMeetingStep() {
  // * - DECLARATIONS -
  const dispatch = useDispatch();

  // * - HELPER FUNCTIONS -
  // Function to change step to meeting
  const handleNextMeetingStep = () => {
    console.log("handleNextMeetingStep button clicked!");
    // TODO: 1. Dispatch to set current step (meeting)
    // dispatch({ type: "SET_CURRENT_STEP_MEETING" });
    // TODO: 2. Dispatch action to set new status (meeting)
    // dispatch({ type: "SET_CURRENT_STEP_MEETING_STATUS" });

  };

  // * - RENDERING -
  return (
    <Button onClick={handleNextMeetingStep}>
      Next Step
      <NavigateNextIcon />
    </Button>
  );
}

// * Exporting NextButtonToMeetingStep Component
export default NextButtonToMeetingStep;
