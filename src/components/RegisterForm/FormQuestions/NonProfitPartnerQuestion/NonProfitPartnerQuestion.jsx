// * - IMPORTING -
// React
import React from "react";
import {InputLabel, OutlinedInput} from "@mui/material";

// * - NonProfitPartnerQuestion COMPONENT -
function NonProfitPartnerQuestion() {
  // * - RENDERING -
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <label>Do you currently partner with a non-profit?</label>
      {/* Non-profit Partner Choices */}
      <div>
        <label>
          <input type="radio" name="NonProfitPartner" value="yes" />
          Yes
        </label>
        <label>
          <input type="radio" name="NonProfitPartner" value="maybe" />
          Maybe
        </label>
        <label>
          <input type="radio" name="NonProfitPartner" value="no" />
          No
        </label>
      </div>
    </div>
  );
}

// * Exporting NonProfitPartnerQuestion Component
export default NonProfitPartnerQuestion;
