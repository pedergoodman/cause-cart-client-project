// * - IMPORTING -
// React
import React from "react";
// MUI
import { InputLabel, Select, MenuItem } from "@mui/material";

// * - HowDidYouHearQuestion Component -
function HowDidYouHearQuestion({ howDidYouHear, setHowDidYouHear }) {
  // * - RENDERING -
  return (
    <div>
      <InputLabel label="How did you hear about us" id="how-did-you-hear-label">
        How did you hear about us?
      </InputLabel>
      <Select
        className="register-form-input-field"
        fullWidth
        placeholder="How did you hear about us?"
        labelId="how-did-you-hear-label"
        id="how-did-you-hear-input"
        value={howDidYouHear}
        label="How did your hear about us input"
        onChange={(event) => setHowDidYouHear(event.target.value)}
      >
        {/* How Did Your Hear About Us Options */}
        <MenuItem value={"Social Media"}>Social Media</MenuItem>
        <MenuItem value={"Another brand"}>Another brand</MenuItem>
        <MenuItem value={"Non-profit organization"}>
          Non-profit organization
        </MenuItem>
        <MenuItem value={"Cause-cart employee"}>Cause-cart employee</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
      </Select>
    </div>
  );
} // * - END HowDidYouHearQuestion Component -

// * Exporting HowDidYouHearQuestion Component
export default HowDidYouHearQuestion;
