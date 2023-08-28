// * - IMPORTING -
// React
import React from "react";

// * - BusinessTypeQuestion Component -
function BusinessTypeQuestion({ businessType, setBusinessType }) {
  return (
    <div>
      <label>
        Business type
        <input
          type="text"
          name="businessType"
          value={businessType}
          onChange={(event) => setBusinessType(event.target.value)}
        />
      </label>
    </div>
  );
} // * - END BusinessTypeQuestion Component -

// * Exporting BusinessTypeQuestion Component
export default BusinessTypeQuestion;
