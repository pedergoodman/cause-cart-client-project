// * - IMPORTING -
// React
import React from "react";
// MUI
import { InputLabel, Select, MenuItem } from "@mui/material";

// * - CountryQuestion Component -
function CountryQuestion({ country, setCountry }) {
  // * - RENDERING -
  return (
    <div
    style={{width: "50%", boxSizing: "border-box"}}
    >
      <InputLabel label="Set Country" id="country-label">
        Country
      </InputLabel>
      <Select
        className="register-form-input-field"
        fullWidth
        placeholder="Select country"
        labelId="country-label"
        id="country-input"
        value={country}
        label="Country input"
        defaultValue={"United States"}
        onChange={(event) => setCountry(event.target.value)}
      >
        {/* Country Options */}
        <MenuItem value={"United States"}>United States</MenuItem>
        <MenuItem value={"Canada"}>Canada</MenuItem>
        <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
        <MenuItem value={"Australia"}>Australia</MenuItem>
        <MenuItem value={"Germany"}>Germany</MenuItem>
        <MenuItem value={"France"}>France</MenuItem>
        <MenuItem value={"Italy"}>Italy</MenuItem>
        <MenuItem value={"Spain"}>Spain</MenuItem>
        <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
        <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
        <MenuItem value={"Sweden"}>Sweden</MenuItem>
        <MenuItem value={"Norway"}>Norway</MenuItem>
        <MenuItem value={"Denmark"}>Denmark</MenuItem>
        <MenuItem value={"Finland"}>Finland</MenuItem>
        <MenuItem value={"Japan"}>Japan</MenuItem>
        <MenuItem value={"China"}>China</MenuItem>
        <MenuItem value={"India"}>India</MenuItem>
        <MenuItem value={"Brazil"}>Brazil</MenuItem>
        <MenuItem value={"Mexico"}>Mexico</MenuItem>
        <MenuItem value={"South Africa"}>South Africa</MenuItem>
        <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
        <MenuItem value={"Singapore"}>Singapore</MenuItem>
        <MenuItem value={"South Korea"}>South Korea</MenuItem>
        <MenuItem value={"United Arab Emirates"}>United Arab Emirates</MenuItem>
        <MenuItem value={"Saudi Arabia"}>Saudi Arabia</MenuItem>
        <MenuItem value={"Russia"}>Russia</MenuItem>
        <MenuItem value={"Turkey"}>Turkey</MenuItem>
        <MenuItem value={"Argentina"}>Argentina</MenuItem>
        <MenuItem value={"Chile"}>Chile</MenuItem>
        <MenuItem value={"Colombia"}>Colombia</MenuItem>
      </Select>
    </div>
  );
} // * - END CountryQuestion Component -

// * Exporting CountryQuestion Component
export default CountryQuestion;
