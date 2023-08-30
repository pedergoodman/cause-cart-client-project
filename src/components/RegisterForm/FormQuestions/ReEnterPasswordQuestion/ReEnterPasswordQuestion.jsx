// * - IMPORTING -
// React
import React from "react";
// MUI
import {InputLabel, OutlinedInput} from "@mui/material";

// * - ReEnterPasswordQuestion Component -
function ReEnterPasswordQuestion({ reEnterPassword, setReEnterPassword }) {
  return (
      <div>
        <InputLabel label="reEnterPassword" id="re-enter-password-label">
          Re-enter password
        </InputLabel>
        <OutlinedInput
          aria-labelledby="re-enter-password-label"
          className="register-form-input-field"
          fullWidth
          id="re-enter-password-input"
          required
          label="re-enter-password"
          placeholder="Re-enter password"
          value={reEnterPassword}
          onChange={(event) => setReEnterPassword(event.target.value)}
        />
    </div>
  );
} // * - END ReEnterPasswordQuestion Component -

// * Exporting ReEnterPasswordQuestion Component
export default ReEnterPasswordQuestion;
