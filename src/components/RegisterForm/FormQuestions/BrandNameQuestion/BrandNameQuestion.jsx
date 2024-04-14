// * - IMPORTING -
// React
import React from "react";
// MUI
import { OutlinedInput, InputLabel } from "@mui/material";

// * - BrandNameQuestion Component -
function BrandNameQuestion({ brandName, setBrandName }) {
  return (
    <div>
      <InputLabel
        label="brandName"
        id="brand-name-label"
        >
        Brand name
      </InputLabel>
      <OutlinedInput
        aria-labelledby="brand-name-label"
        className="register-and-login-form-input-field"
        fullWidth
        id="brand-name-input"
        required
        label="brandName"
        placeholder="Brand name"
        value={brandName}
        onChange={(event) => setBrandName(event.target.value)}
      />
    </div>
  );
} // * - END BrandNameQuestion Component -

// * Exporting BrandNameQuestion Component
export default BrandNameQuestion;
