// * - IMPORTING -
// React
import React from "react";
// MUI
import { InputLabel, Select, MenuItem } from "@mui/material";

// * - productCategoriesQuestion Component -
function productCategoriesQuestion({ productCategories, setProductCategories }) {
  // * - RENDERING -
  return (
    <div style={{ width: "50%", boxSizing: "border-box" }}>
      <InputLabel label="Product categories" id="product-categories-label">
        Product categories
      </InputLabel>
      <Select
        className="register-form-input-field"
        fullWidth
        multiple
        placeholder="Select product categories"
        labelId="product-categories-label"
        id="product-categories-input"
        value={productCategories}
        label="Product categories input"
        onChange={(event) => setProductCategories(event.target.value)}
      >
        {/* Product categories Options */}
        <MenuItem value={"Home Décor"}>Home Décor</MenuItem>
        <MenuItem value={"Jewelry"}>Jewelry</MenuItem>
        <MenuItem value={"Kids Apparel"}>Kids Apparel</MenuItem>
        <MenuItem value={"Kids & Baby (non-Apparel)"}>
          Kids & Baby (non-Apparel)
        </MenuItem>
        <MenuItem value={"Men’s accessories"}>Men’s accessories</MenuItem>
        <MenuItem value={"Men’s apparel"}>Men’s apparel</MenuItem>
        <MenuItem value={"Beauty & Wellness"}>Beauty & Wellness</MenuItem>
        <MenuItem value={"Pets"}>Pets</MenuItem>
        <MenuItem value={"Women’s accessories"}>Women’s accessories</MenuItem>
        <MenuItem value={"Women’s apparel"}>Women’s apparel</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
      </Select>
    </div>
  );
} // * - END productCategoriesQuestion Component -

// * Exporting productCategoriesQuestion Component
export default productCategoriesQuestion;
