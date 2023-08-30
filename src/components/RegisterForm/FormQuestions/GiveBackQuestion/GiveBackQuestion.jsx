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

// * - GiveBackQuestion COMPONENT -
function GiveBackQuestion({
  giveBack,
  setGiveBack,
  giveBackDescriptionFieldInput,
  setGiveBackDescriptionFieldInput,
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

    giveBackDescriptionFieldInput.length <= characterLimit
      ? // Condition for when length is within limit
        (setGiveBackDescriptionFieldInput(newInputValue),
        setShowErrorMessage(false))
      : // Condition for when length exceeds limit
        (setGiveBackDescriptionFieldInput(
          newInputValue.slice(0, characterLimit)
        ),
        setShowErrorMessage(true));
  };

  // * - RENDERING -
  return (
    <div>
      <FormLabel label="giveBack" id="give-back-label">
        Does your product currently offer a give back? (Ex: % donated,
        sustainable materials used, mission focused, etc?)
      </FormLabel>
      {/* Give Back Options */}
      <RadioGroup
        className="register-form-input-field-radio"
        aria-labelledby="give-back-label"
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={(event) => setGiveBack(event.target.value)}
          value="Yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          onChange={(event) => setGiveBack(event.target.value)}
          value="Maybe"
          control={<Radio />}
          label="Maybe"
        />
        <FormControlLabel
          onChange={(event) => setGiveBack(event.target.value)}
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
      {giveBack === "Yes" || giveBack === "Maybe" || giveBack === "No" ? (
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
          value={giveBackDescriptionFieldInput}
          onChange={handleDescriptionInput}
        />
      ) : null}
    </div>
  );
}

// * Exporting GiveBackQuestion Component
export default GiveBackQuestion;
