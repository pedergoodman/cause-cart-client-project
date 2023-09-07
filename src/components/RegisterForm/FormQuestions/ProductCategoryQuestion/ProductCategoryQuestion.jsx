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
  const [showErrorPrompt, setShowErrorPrompt] = useState(false);
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
    setProdCategoriesOtherOptionDescInput(newInputValue); // propagate changes to parent
    setProdCategoriesOtherOptionError(false) // assumes typing and clears error 

    // check and enforce character limit on other category text input
    if (newInputValue.length <= characterLimit) {
      setShowErrorPrompt(false);
    } else {
      setOtherOptionTextInput(newInputValue.slice(0, characterLimit));
      setShowErrorPrompt(true);
    }

    // shows error if empty
    if (!newInputValue) {
    console.log('newInputValue is', newInputValue);
      setProdCategoriesOtherOptionError(true)
    } 
  };



    // merge other selection with other input text
    // if(productCategories.indexOf("Other") == 0){
    //   console.log('in reg button, other is true');
    //   const adjustedForOther = productCategories.splice(productCategories.indexOf("Other"), 1, `Other ${prodCategoriesOtherOptionDescInput}`);
    // } else {
    //   const adjustedForOther = productCategories;
    //   console.log('cant find other in product');
    // }

  // inactive??
  // const handleAddingOtherCategoryOptions = () => {
  //   const updatedCategories = productCategories.map(category => {
  //     if (category === "Other") {
  //       setShowOtherOptionInputField(false);
  //       return `Other: ${otherOptionTextInput}`;
  //     }
  //     return category;
  //   });

  //   setOtherOptionTextInput("");
  //   setProductCategories(updatedCategories);
  // };

  // * Handle checkbox change for all categories ??? or for mapped categories

  const handleCheckboxChange = event => {
    const category = event.target.value;


    console.log("category is:", category);

    // console.log("isChecked is:", isChecked);

    // adds or removes from array
    setProductCategories(
      // On autofill we get a stringified value.
      typeof category === "string" ? category.split(",") : category
    );



    if (category.includes("Other")) {
      console.log("other was selected");
      setProdCategoriesOtherOptionError(false); // Clear the error when Other is unchecked
    }

    if (!category.includes("Other")) {
      setOtherOptionTextInput("")
      setProdCategoriesOtherOptionDescInput(""); // clear the description in local & parent state when Other is unchecked
    }

  };

  // TODO render value logic if time
  // if one selected, display that
  // if multiple selected, dispaly number

// TODO
// seperate out Other field into it's own local state
  // isChecked value handled locally
  // value is in element
// on click handled separately
  // if checking
  // --> set local otherState to other + : Newthing
  // --> set parent state to local state
  // if unchecking
  // --> clear both states

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
        value={productCategories}
        onChange={handleCheckboxChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={selected => `${selected.length} selected`}
      >
        {/* Mapped Product Categories */}
        {categoryNames.map(category => (
          <MenuItem
            key={category.id}
            value={category.name}
            // onChange={handleCheckboxChange}
          >
            <Checkbox checked={productCategories.includes(category.name)} />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}





      </Select>

      {showErrorPrompt && (
        <p style={{ color: "#E23D28", margin: "17px 0px 3px" }}>
          You exceeded the character limit!
        </p>
      )}

      {productCategories.includes("Other") && (
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

{
  /*         
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
        </FormGroup> */
}
