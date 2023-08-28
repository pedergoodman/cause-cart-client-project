// * - IMPORTING -
// React
import React from "react";

// * - BrandNameQuestion Component -
function BrandNameQuestion({ brandName, setBrandName }) {
  return (
    <div>
      <label>
        Brand name
        <input
          type="text"
          name="brandName"
          value={brandName}
          required
          onChange={(event) => setBrandName(event.target.value)}
        />
      </label>
    </div>
  );
}; // * - END BrandNameQuestion Component -

// * Exporting BrandNameQuestion Component
export default BrandNameQuestion;