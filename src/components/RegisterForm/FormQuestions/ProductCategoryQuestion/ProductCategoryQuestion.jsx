import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  TextField,
} from "@mui/material";

function ProductCategoryQuestion({
  productCategories,
  setProductCategories,
  prodCategoriesOtherOptionDescInput,
  setProdCategoriesOtherOptionDescInput,
}) {
  const characterLimit = 45;

  const [showOtherOptionInputField, setShowOtherOptionInputField] =
    useState(false);
  const [otherOptionTextInput, setOtherOptionTextInput] = useState("");
  const [showErrorPrompt, setShowErrorPrompt] = useState(false);
  const [prodCategoriesOtherOptionError, setProdCategoriesOtherOptionError] =
    useState(false);

  const handleDescriptionInput = (event) => {
    const newInputValue = event.target.value;

    if (newInputValue.length <= characterLimit) {
      setOtherOptionTextInput(newInputValue);
      setProdCategoriesOtherOptionDescInput(newInputValue); // propagate changes to parent
      setShowErrorPrompt(false);
    } else {
      setOtherOptionTextInput(newInputValue.slice(0, characterLimit));
      setShowErrorPrompt(true);
    }
  };

  const handleAddingOtherCategoryOptions = () => {
    const updatedCategories = productCategories.map((category) => {
      if (category === "Other") {
        setShowOtherOptionInputField(false);
        return `Other: ${otherOptionTextInput}`;
      }
      return category;
    });

    setOtherOptionTextInput("");
    setProductCategories(updatedCategories);
  };

  const handleCheckboxChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    if (category === "Other") {
      setShowOtherOptionInputField(isChecked);
      setProdCategoriesOtherOptionError(false); // Clear the error when Other is unchecked
      if (!isChecked) {
        setProdCategoriesOtherOptionDescInput(""); // clear the description in parent state when Other is unchecked
      }
    }

    if (isChecked) {
      setProductCategories((prevCategories) => [...prevCategories, category]);
    } else {
      setProductCategories((prevCategories) =>
        prevCategories.filter((cat) => cat !== category)
      );
    }
  };

  return (
    <div style={{ width: "50%", boxSizing: "border-box" }}>
      <FormControl component="fieldset">
        <InputLabel id="product-categories-label">
          Product categories
        </InputLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Home Décor")}
                onChange={handleCheckboxChange}
                value="Home Décor"
              />
            }
            label="Home Décor"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Jewelry")}
                onChange={handleCheckboxChange}
                value="Jewelry"
              />
            }
            label="Jewelry"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Kids Apparel")}
                onChange={handleCheckboxChange}
                value="Kids Apparel"
              />
            }
            label="Kids Apparel"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes(
                  "Kids & Baby (non-Apparel)"
                )}
                onChange={handleCheckboxChange}
                value="Kids & Baby (non-Apparel)"
              />
            }
            label="Kids & Baby (non-Apparel)"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Men’s accessories")}
                onChange={handleCheckboxChange}
                value="Men’s accessories"
              />
            }
            label="Men’s accessories"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Men’s apparel")}
                onChange={handleCheckboxChange}
                value="Men’s apparel"
              />
            }
            label="Men’s apparel"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Beauty & Wellness")}
                onChange={handleCheckboxChange}
                value="Beauty & Wellness"
              />
            }
            label="Beauty & Wellness"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Pets")}
                onChange={handleCheckboxChange}
                value="Pets"
              />
            }
            label="Pets"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Women’s accessories")}
                onChange={handleCheckboxChange}
                value="Women’s accessories"
              />
            }
            label="Women’s accessories"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Women’s apparel")}
                onChange={handleCheckboxChange}
                value="Women’s apparel"
              />
            }
            label="Women’s apparel"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={productCategories.includes("Other")}
                onChange={handleCheckboxChange}
                value="Other"
              />
            }
            label="Other"
          />
        </FormGroup>
      </FormControl>

      {showErrorPrompt && (
        <p style={{ color: "#E23D28", margin: "17px 0px 3px" }}>
          You exceeded the character limit!
        </p>
      )}

      {showOtherOptionInputField && (
        <div>
          <TextField
            style={{ marginTop: "25px" }}
            className="register-and-login-form-input-field"
            fullWidth
            id="outlined-multiline-flexible"
            label="Category name(s)"
            helperText="You selected other. Please enter the product category name(s)."
            multiline
            required
            error={showErrorPrompt || prodCategoriesOtherOptionError}
            maxRows={4}
            value={otherOptionTextInput}
            onChange={handleDescriptionInput}
          />

          {prodCategoriesOtherOptionError && (
            <p style={{ color: "#E23D28", margin: "17px 0px 3px" }}>
              This field is required.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductCategoryQuestion;
