// * - IMPORTING -
// React
import React, { useState } from "react";
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@mui/material";

// * - NonProfitPartnerQuestion COMPONENT -
function NonProfitPartnerQuestion({
  nonProfitPartner,
  setNonProfitPartner,
  nonProfitPartnerDescriptionFieldInput,
  setNonProfitPartnerDescriptionFieldInput,
}) {
  // * - DECLARATIONS -
  const characterLimit = 220; // character limit of description textfield

  // * - STATE -
  // * For displaying error message of description textfield
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // * Function to handle setting the input field value and displaying error message
  const handleDescriptionInput = (event) => {
    // Declaring event as variable
    const newInputValue = event.target.value;

    nonProfitPartnerDescriptionFieldInput.length <= characterLimit
      ? // Condition for when length is within limit
        (setNonProfitPartnerDescriptionFieldInput(newInputValue),
        setShowErrorMessage(false))
      : // Condition for when length exceeds limit
        (setNonProfitPartnerDescriptionFieldInput(
          newInputValue.slice(0, characterLimit)
        ),
        setShowErrorMessage(true));
  };

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
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={(event) => setNonProfitPartner(event.target.value)}
          value="Yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          onChange={(event) => setNonProfitPartner(event.target.value)}
          value="Maybe"
          control={<Radio />}
          label="Maybe"
        />
        <FormControlLabel
          onChange={(event) => setNonProfitPartner(event.target.value)}
          value="No"
          control={<Radio />}
          label="No"
        />
      </RadioGroup>

      {/* Textfield Description */}
      {/* Error Prompt */}
      {showErrorMessage && (
        <p style={{ color: "#E23D28", margin: "8px 0 6px" }}>
          You exceeded the character limit!
        </p>
      )}
      {/* Conditional render of text field */}
      {nonProfitPartner === "Yes" ||
      nonProfitPartner === "Maybe" ||
      nonProfitPartner === "No" ? (
        <TextField
          style={{
            marginTop: "15px",
          }}
          className="register-form-input-field"
          fullWidth
          id="outlined-multiline-flexible"
          label="Description"
          helperText="Please write a short description explaining your answer."
          multiline
          required
          error={showErrorMessage}
          maxRows={4}
          value={nonProfitPartnerDescriptionFieldInput}
          onChange={handleDescriptionInput}
        />
      ) : null}
    </div>
  );
}

// * Exporting NonProfitPartnerQuestion Component
export default NonProfitPartnerQuestion;
