// * - IMPORTING -
// React
import React, { useState, useEffect } from "react";
// MUI
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// * - CreatePasswordQuestion Component -
function CreatePasswordQuestion({
  password,
  setPassword,
  reEnterPassword,
  setReEnterPassword,
}) {
  // * - STATE -
  const [showErrorPrompt, setShowErrorPrompt] = useState(false); // To toggle error prompt
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [showReEnterPassword, setShowReEnterPassword] = useState(false); // To toggle re-enter password visibility

  // * Function to toggle showPassword on/off (true/false)
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }; // end handleTogglePasswordVisibility

  // * Function to toggle showReEnterPassword on/off (true/false)
  const handleToggleReEnterPasswordVisibility = () => {
    setShowReEnterPassword(!showReEnterPassword);
  }; // end handleToggleReEnterPasswordVisibility

  // Synchronously check if passwords match and toggle error prompt accordingly
  useEffect(() => {
    // passwords match
    if (reEnterPassword === password) {
      setShowErrorPrompt(false);
    } // re-enter state empty
    else if (reEnterPassword === "") {
      setShowErrorPrompt(false);
    } // re-enter input field value empty
    else {
      setShowErrorPrompt(true);
    }
  }, [reEnterPassword, password]);

  // * - RENDERING -
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2.2rem",
      }}
    >
      <div>
        {/* Password */}
        <InputLabel label="password" id="password-label">
          Password
        </InputLabel>
        <OutlinedInput
          aria-labelledby="password-label"
          className="register-form-input-field"
          fullWidth
          id="password-input"
          required
          type={showPassword ? "text" : "password"}
          label="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            // Password visibility icon and functionality to toggle show password on/off
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>

      <div>
        {/* Error Prompt */}
        {showErrorPrompt && (
          <p style={{ color: "#E23D28", margin: "-9px 0px 6px" }}>
            Your passwords do not match!
          </p>
        )}
        {/* Re-enter Password */}
        <InputLabel label="reEnterPassword" id="re-enter-password-label">
          Re-enter password
        </InputLabel>
        <OutlinedInput
          aria-labelledby="re-enter-password-label"
          className="register-form-input-field"
          fullWidth
          id="re-enter-password-input"
          required
          type={showReEnterPassword ? "text" : "password"}
          error={showErrorPrompt}
          label="re-enter-password"
          placeholder="Re-enter password"
          value={reEnterPassword}
          onChange={(event) => setReEnterPassword(event.target.value)}
          endAdornment={
            // Password visibility icon and functionality to toggle show password on/off
            <InputAdornment position="end">
              <IconButton onClick={handleToggleReEnterPasswordVisibility}>
                {showReEnterPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
} // * - END CreatePasswordQuestion Component -

// * Exporting CreatePasswordQuestion Component
export default CreatePasswordQuestion;
