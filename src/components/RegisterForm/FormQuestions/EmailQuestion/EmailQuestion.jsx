// * - IMPORTING -
// React
import React from "react";
// MUI
import {InputLabel, OutlinedInput} from "@mui/material";

// * - EmailQuestion Component -
function EmailQuestion({ email, setEmail }) {
  // * - RENDERING -
  return (
      <div>
        <InputLabel label="email" id="email-label">
          Email
        </InputLabel>
        <OutlinedInput
          aria-labelledby="email-label"
          className="register-form-input-field"
          fullWidth
          id="email-input"
          required
          label="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
    </div>
  );
} // * - END EmailQuestion Component -

// * Exporting EmailQuestion Component
export default EmailQuestion;
