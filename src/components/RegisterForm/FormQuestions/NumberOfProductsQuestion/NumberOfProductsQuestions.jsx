// * - IMPORTING -
// React
import React from "react";
// MUI
import {InputLabel, Select, MenuItem} from "@mui/material";

// * - NumberOfProductsQuestion Component -
function NumberOfProductsQuestion({ numberOfProducts, setNumberOfProducts }) {
  
  // * - RENDERING -
  return (
    <div>
      <InputLabel label="Number of products" id="number-of-products-label">
        Number of Products
      </InputLabel>
      <Select
        className="register-and-login-form-input-field"
        fullWidth
        placeholder="Select number of products"
        labelId="number-of-products-label"
        id="number-of-products-input"
        value={numberOfProducts}
        label="Number of products input"
        onChange={(event) => setNumberOfProducts(event.target.value)}
      >
        {/*  */}
        <MenuItem value={"1-10"}>1-10 </MenuItem>
        <MenuItem value={"11-25"}>11-25</MenuItem>
        <MenuItem value={"26-50"}>26-50</MenuItem>
        <MenuItem value={"51-100"}>51-100</MenuItem>
        <MenuItem value={"More than 100"}>More than 100</MenuItem>
      </Select>
    </div>
  );
} // * - END NumberOfProductsQuestion Component -

// * Exporting NumberOfProductsQuestion Component
export default NumberOfProductsQuestion;
