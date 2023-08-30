// * - IMPORTING -
// React
import React from "react";
import {
  FormLabel,
  FormControlLabel,
  OutlinedInput,
  RadioGroup,
  Radio,
} from "@mui/material";

// * - GiveBackQuestion COMPONENT -
function GiveBackQuestion({ giveBack, setGiveBack }) {
  // * - RENDERING -
  return (
    <div>
      <FormLabel label="giveBack" id="give-back-label">
        Does your product currently offer a give back? (Ex: % donated,
        sustainable materials used, mission focused, etc?)
      </FormLabel>

      {/* Give Back Options */}
      <RadioGroup
        className="register-form-input-field-radio"
        aria-labelledby="give-back-label"
        defaultValue="yes"
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={(event) => setGiveBack(event.target.value)}
          value="yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          onChange={(event) => setGiveBack(event.target.value)}
          value="maybe"
          control={<Radio />}
          label="Maybe"
        />
        <FormControlLabel
          onChange={(event) => setGiveBack(event.target.value)}
          value="no"
          control={<Radio />}
          label="No"
        />
      </RadioGroup>
    </div>
  );
}

// * Exporting GiveBackQuestion Component
export default GiveBackQuestion;
