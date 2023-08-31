// * - IMPORTING -
// React
import React from "react";
import {InputLabel, OutlinedInput} from "@mui/material";

// * - PasswordQuestion Component -
function PasswordQuestion({ password, setPassword }) {
  return (
      <div>
        <InputLabel label="password" id="password-label">
          Password
        </InputLabel>
        <OutlinedInput
          aria-labelledby="password-label"
          className="register-form-input-field"
          fullWidth
          id="password-input"
          required
          label="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
  );
} // * - END PasswordQuestion Component -

// * Exporting PasswordQuestion Component
export default PasswordQuestion;
