// * - IMPORTING -
// React
import React, { useEffect, useState } from "react";
// MUI
import {
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// * - productCategoriesQuestion Component -
function productCategoriesQuestion({
  productCategories,
  setProductCategories,
}) {
  // * - DECLARATIONS -
  const characterLimit = 45; // character limit of other category text input

  // * - STATE -
  //  For rendering description box
  const [showOtherOptionInputField, setShowOtherOptionInputField] =
    useState(false);
  //  For other option text input
  const [otherOptionTextInput, setOtherOptionTextInput] = useState("");
  //  For displaying error message of description textfield
  const [showErrorPrompt, setShowErrorPrompt] = useState(false);

  // * Function to handle setting the input field value and displaying error message
  const handleDescriptionInput = (event) => {
    // Declaring event as variable
    const newInputValue = event.target.value;

    otherOptionTextInput.length <= characterLimit
      ? // When length is within limit
        (setOtherOptionTextInput(newInputValue), setShowErrorPrompt(false))
      : // When length exceeds limit
        (setOtherOptionTextInput(newInputValue.slice(0, characterLimit)),
        setShowErrorPrompt(true));
  }; // end handleDescriptionInput

  // * Function setting state with conditional to render input field if option "Other" is chosen
  const handleShowOtherOptionInputField = (event) => {
    const selectedCategories = event.target.value;

    // Check if "Other" is selected
    selectedCategories.includes("Other")
      ? setShowOtherOptionInputField(true)
      : setShowOtherOptionInputField(false);

    // Update the selected product categories
    setProductCategories(selectedCategories);
  }; // end handleShowOtherOptionInputField

  // Function that finds string "Other" and replaces it with text input (Ex: Other: Furniture)
  const handleAddingOtherCategoryOptions = () => {
    // New array for product categories, due to string "Other" change
    const updatedCategories = productCategories.map((category) => {
      // Check if the category starts with "Other"
      if (category.startsWith("Other")) {
        setShowOtherOptionInputField(false);
        // Update the category to the interpolated string
        return `Product Category Other: ${otherOptionTextInput}`;
      }
      // Keep other categories unchanged
      return category;
    });

    // Clearing input
    setOtherOptionTextInput("");

    // Update the productCategories state with the new array
    setProductCategories(updatedCategories);
  }; // end handleAddingOtherCategoryOptions

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
      {showErrorPrompt && (
        <p style={{ color: "#E23D28", margin: "17px 0px 3px" }}>
          You exceeded the character limit!
        </p>
      )}
      {showOtherOptionInputField && (
        <TextField
          style={{
            marginTop: "25px",
          }}
          className="register-form-input-field"
          fullWidth
          id="outlined-multiline-flexible"
          label="Category name(s)"
          helperText="You selected other. Please enter the product category name(s)."
          multiline
          required
          error={showErrorPrompt}
          maxRows={4}
          value={otherOptionTextInput}
          onChange={handleDescriptionInput}
          InputProps={{
            endAdornment: (
              <InputAdornment style={{ marginLeft: "50px" }} position="end">
                <IconButton onClick={handleAddingOtherCategoryOptions}>
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        // Input field button here (like visibility, so within TextField)
        // 1. On click run function handleAddOtherProductCategories
      )}
    </div>
  );
} // * - END productCategoriesQuestion Component -

// * Exporting productCategoriesQuestion Component
export default productCategoriesQuestion;
