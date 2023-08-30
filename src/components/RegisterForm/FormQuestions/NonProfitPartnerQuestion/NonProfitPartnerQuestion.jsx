// * - IMPORTING -
// React
import React from "react";
import { FormLabel, FormControlLabel, RadioGroup, Radio} from "@mui/material";

// * - NonProfitPartnerQuestion COMPONENT -
function NonProfitPartnerQuestion({nonProfitPartner, setNonProfitPartner}) {
  // * - RENDERING -
  return (
     <div>
      <FormLabel label="giveBack" id="non-profit-label">
        Do you currently partner with a non-profit?
      </FormLabel>

      {/* Give Back Options */}
      <RadioGroup
        className="register-form-input-field-radio"
        aria-labelledby="non-profit-label"
        defaultValue="yes"
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={(event) => setNonProfitPartner(event.target.value)}
          value="yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          onChange={(event) => setNonProfitPartner(event.target.value)}
          value="maybe"
          control={<Radio />}
          label="Maybe"
        />
        <FormControlLabel
          onChange={(event) => setNonProfitPartner(event.target.value)}
          value="no"
          control={<Radio />}
          label="No"
        />
      </RadioGroup>
    </div>
  );
}

// * Exporting NonProfitPartnerQuestion Component
export default NonProfitPartnerQuestion;
