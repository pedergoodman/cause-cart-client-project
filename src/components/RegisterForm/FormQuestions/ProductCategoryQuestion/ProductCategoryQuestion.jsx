import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { OtherHouses } from "@mui/icons-material";

function ProductCategoryQuestion({
  productCategories,
  setProductCategories,
  prodCategoriesOtherOptionDescInput,
  setProdCategoriesOtherOptionDescInput,
}) {
  // * TOOLS
  const dispatch = useDispatch();

  // set character limit for other input field
  const characterLimit = 45;

  // * FROM STORE
  // grabs category names from database
  // object with id & name
  const categoryNames = useSelector(state => state.categoryNameReducer);

  // * LOCAL STATE
  // Other checked status
  const [otherIsChecked, setOtherIsChecked] = useState(false);

  // capture other input text
  const [otherOptionTextInput, setOtherOptionTextInput] = useState("");

  // Errors
  // toggle show error
  const [showCharLimitErrorPrompt, setShowErrorPrompt] = useState(false);
  //
  const [prodCategoriesOtherOptionError, setProdCategoriesOtherOptionError] =
    useState(false);

  // fetch category list
  useEffect(() => {
    dispatch({
      type: "FETCH_ADMIN_CATEGORIES",
    });
  }, []);

  // * HANDLE CHANGES

  // * Other Text Input
  const handleOtherDescriptionInput = event => {
    const newInputValue = event.target.value;
    // set input value
    setOtherOptionTextInput(newInputValue); // set local state value
    setProdCategoriesOtherOptionDescInput(`Other: ${newInputValue}`); // propagate changes to parent
    setProdCategoriesOtherOptionError(false); // assumes typing and clears error

    // check and enforce character limit on other category text input
    if (newInputValue.length <= characterLimit) {
      setShowErrorPrompt(false);
    } else {
      setOtherOptionTextInput(newInputValue.slice(0, characterLimit));
      setShowErrorPrompt(true);
    }

    // shows error if empty
    if (!newInputValue) {
      console.log("newInputValue is", newInputValue);
      setProdCategoriesOtherOptionError(true);
      setProdCategoriesOtherOptionDescInput("Other");
    }
  };

  const handleCheckOtherChange = event => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    setOtherIsChecked(!otherIsChecked); // isChecked to trigger checkbox and other Input field

    if (isChecked) {
      setProdCategoriesOtherOptionDescInput(category); // set other options parent state value
    } else {
      setProdCategoriesOtherOptionDescInput(""); // clear other options parent state value
      setOtherOptionTextInput(""); // clear set local state value
    }

    console.log("productCategories is:", productCategories);
    console.log(
      "prodCategoriesOtherOptionDescInput is:",
      prodCategoriesOtherOptionDescInput
    );
  };

  // * Handle checkbox change for all categories except other
  const handleCheckboxChange = event => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    console.log("category is:", category);
    console.log("isChecked is:", isChecked);

    if (isChecked) {
      setProductCategories(prevCategories => [...prevCategories, category]);
    } else {
      setProductCategories(prevCategories =>
        prevCategories.filter(cat => cat !== category)
      );
    }

    console.log("productCategories is:", productCategories);
    console.log(
      "prodCategoriesOtherOptionDescInput is:",
      prodCategoriesOtherOptionDescInput
    );
  };

  // * Conditional Rendering of product category selections
    let selected = ''

  if (productCategories?.length == 0 && !otherIsChecked) { // if NOTHING is selected
    // if nothing is selected
    selected = 'Select one or more'
  } else if (productCategories?.length == 1 && !otherIsChecked) { // if ONE thing is selected, but NOT other
    selected = productCategories
  } else if (productCategories?.length == 0 && otherIsChecked) { // if ONLY other is selected
    selected = 'Other'
  } else if (productCategories?.length >= 1 && otherIsChecked) { // if a category && other is selected
    selected = `${productCategories?.length + 1} categories selected`
  } else {
    selected = `${productCategories?.length} categories selected` // if more than one category is selected, but not other
  }



  return (
    <div style={{ width: "50%", boxSizing: "border-box" }}>
      <InputLabel id="product-categories-label">Product categories</InputLabel>

      <Select
        className="register-and-login-form-input-field"
        labelId="product-categories-label"
        fullWidth
        placeholder="Select Product Categories"
        id="product-categories-multiple-checkbox"
        multiple
        label="product category input"
        value={[selected]}
        // onChange={handleCheckboxChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={selected => selected}
      >
        <FormGroup>
          {categoryNames.map(category => (
            <FormControlLabel
              key={category.id}
              control={
                <Checkbox
                  checked={productCategories?.includes(category.name)}
                  onChange={handleCheckboxChange}
                  value={category.name}
                />
              }
              label={category.name}
            />
          ))}

          {/* OTHER option */}
          <FormControlLabel
            control={
              <Checkbox
                checked={otherIsChecked}
                onChange={handleCheckOtherChange}
                value="Other"
              />
            }
            label="Other"
          />
        </FormGroup>
      </Select>

      {showCharLimitErrorPrompt && (
        <p style={{ color: "#E23D28", margin: "17px 0px 3px" }}>
          You exceeded the character limit!
        </p>
      )}

      {otherIsChecked && (
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
            error={showCharLimitErrorPrompt || prodCategoriesOtherOptionError}
            maxRows={4}
            value={otherOptionTextInput}
            onChange={handleOtherDescriptionInput}
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
