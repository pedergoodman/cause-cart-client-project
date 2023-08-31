// * - IMPORTING -
// React
import React, { useEffect, useState } from "react";
// MUI
import { InputLabel, Select, MenuItem, TextField } from "@mui/material";

// * - productCategoriesQuestion Component -
function productCategoriesQuestion({
  productCategories,
  setProductCategories,
}) {
  // * - DECLARATIONS -
  const characterLimit = 5; // character limit of other category text input

  // * - STATE -
  // * For rendering description box
  const [showOtherOptionInputField, setShowOtherOptionInputField] =
    useState(false);
  // * For other option text input
  const [otherOptionTextInput, setOtherOptionTextInput] = useState("");
  // * For displaying error message of description textfield
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // * Function to handle setting the input field value and displaying error message
  const handleDescriptionInput = (event) => {
    // Declaring event as variable
    const newInputValue = event.target.value;

    otherOptionTextInput.length <= characterLimit
      ? // When length is within limit
        (setOtherOptionTextInput(newInputValue), setShowErrorMessage(false))
      : // When length exceeds limit
        (setOtherOptionTextInput(newInputValue.slice(0, characterLimit)),
        setShowErrorMessage(true));
  }; // end handleDescriptionInput

  // TWO THINGS
  // FIRST
  // Conditional to render input field if option "Other" is chosen
  // (May need logic and have to map through productCategories)
  // 1. Map through productCategories array
  // 2. If empty don't render other option input field
  // 3. If items but no string "Other" don't render other option input field
  // 4. If string "Other" set showOtherOptionInputField true, rendering other option input field
  const handleShowOtherOptionInputField = (event) => {
    const selectedCategories = event.target.value;

    // Check if "Other" is selected
    selectedCategories.includes("Other") ? (
      setShowOtherOptionInputField(true)
     ) : (
      setShowOtherOptionInputField(false)
     )

    // Update the selected product categories
    setProductCategories(selectedCategories);
  };

  // SECOND
  // Function that that adds other text category like "Other: *input text*" to array where "Other" is
  // May need to use array and string methods
  // 1. Find "Other" string
  // 2. Replace it with state (Ex: Other: Furniture)

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
        onChange={handleShowOtherOptionInputField}
      >
        {/* Product Categories Options */}
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

      {/* Render Other Option Input Field Here */}
      {showOtherOptionInputField && (
        <TextField
          style={{
            marginTop: "15px",
          }}
          className="register-form-input-field"
          fullWidth
          id="outlined-multiline-flexible"
          label="Add product category name"
          helperText="You chose other. Please enter the product category name."
          multiline
          required
          error={showErrorMessage}
          maxRows={4}
          value={otherOptionTextInput}
          onChange={handleDescriptionInput}
        />
        // Input field button here (like visibility, so within TextField)
        // 1. On click run function handleAddOtherProductCategories
      )}
    </div>
  );
} // * - END productCategoriesQuestion Component -

// * Exporting productCategoriesQuestion Component
export default productCategoriesQuestion;
