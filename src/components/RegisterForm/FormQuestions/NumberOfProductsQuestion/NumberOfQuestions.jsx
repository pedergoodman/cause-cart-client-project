// * - IMPORTING -
// React
import React from "react";
// MUI
import {InputLabel, OutlinedInput} from "@mui/material";

// * - NumberOfProductsQuestion Component -
function NumberOfProductsQuestion({ numberOfProducts, setNumberOfProducts }) {
  
  // * - RENDERING -
  return (
    <div>
      <label>
        Number of products you would like to sell
        <input
          type="number"
          name="numberOfProducts"
          value={numberOfProducts}
          required
          onChange={(event) => setNumberOfProducts(event.target.value)}
        />
      </label>
    </div>
  );
} // * - END NumberOfProductsQuestion Component -

// * Exporting NumberOfProductsQuestion Component
export default NumberOfProductsQuestion;
