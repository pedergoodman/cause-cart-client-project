// * - IMPORTING -
// React
import React from "react";
// MUI
import {InputLabel, OutlinedInput} from "@mui/material";

// * - WebsiteURL Component -
function WebsiteURL({ websiteURL, setWebsiteURL }) {

  // * - RENDERING -
  return (
      <div>
        <InputLabel label="websiteURL" id="website-URL-label">
          Website URL
        </InputLabel>
        <OutlinedInput
          aria-labelledby="website-URL-label"
          className="register-and-login-form-input-field"
          fullWidth
          id="website-URL-input"
          required
          label="websiteURL"
          placeholder="Website URL"
          value={websiteURL}
          onChange={(event) => setWebsiteURL(event.target.value)}
        />
    </div>
  );
} // * - END WebsiteURL Component -

// * Exporting WebsiteURL Component
export default WebsiteURL;
