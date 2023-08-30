// * - IMPORTING -
// React
import React from "react";
// MUI
import {TextField, Input, InputLabel, MenuItem, Select, OutlinedInput} from "@mui/material";

// * - BusinessTypeQuestion Component -
function BusinessTypeQuestion({ businessType, setBusinessType }) {
  
  // * - RENDERING -
  return (
    <div>
      <InputLabel id="business-type-label">Business type</InputLabel>
      <Select
        className="register-form-input-field"
        fullWidth
        placeholder="Select a business type"
        labelId="business-type-label"
        id="business-type"
        value={businessType}
        label="businessType"
        onChange={(event) => setBusinessType(event.target.value)}
      >
        <MenuItem value={"LLC"}>LLC</MenuItem>
        <MenuItem value={"S-corp"}>S-corp</MenuItem>
        <MenuItem value={"C-corp"}>C-corp</MenuItem>
        <MenuItem value={"Non-Profit 501c3"}>Non-Profit 501c3</MenuItem>
        <MenuItem value={"Cooperative"}>Cooperative</MenuItem>
      </Select>
    </div>
  );
} // * - END BusinessTypeQuestion Component -

// * Exporting BusinessTypeQuestion Component
export default BusinessTypeQuestion;
