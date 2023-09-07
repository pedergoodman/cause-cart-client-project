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
  // Other settings
  // show other input if other is selected
  const [showOtherOptionInputField, setShowOtherOptionInputField] =
    useState(false);
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
  const handleDescriptionInput = event => {
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



// inactive??
  const handleAddingOtherCategoryOptions = () => {
    const updatedCategories = productCategories.map(category => {
      if (category === "Other") {
        setShowOtherOptionInputField(false);
        return `Other: ${otherOptionTextInput}`;
      }
      return category;
    });

    setOtherOptionTextInput("");
    setProductCategories(updatedCategories);
  };



  // * Handle checkbox change for all categories ??? or for mapped categories

  const handleCheckboxChange = event => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    console.log('category is:', category);
    // console.log(isChecked);
    setProductCategories(
      // On autofill we get a stringified value.
      typeof category === 'string' ? category.split(',') : category,
    );
    

    
    if (category === "Other") {
      
      setOtherIsChecked(!otherIsChecked)

      // setShowOtherOptionInputField(isChecked);
      // setProdCategoriesOtherOptionError(false); // Clear the error when Other is unchecked
      // if (!isChecked) {
      //   setProdCategoriesOtherOptionDescInput(""); // clear the description in parent state when Other is unchecked
      // }
    }

    // console.log("productCategories BEFORE IF", productCategories);
    // if (isChecked) {
    //   setProductCategories(prevCategories => [...prevCategories, category]);
    //   console.log("productCategories IF TRUE", productCategories);
    // } else {

    //   setProductCategories([...productCategories, category])
    //   setProductCategories(prevCategories =>
    //     prevCategories.filter(cat => cat !== category)
    //   );
    //   console.log("productCategories IF FALSE", productCategories);
    // }
  };

  // TODO render value logic if time
    // if one selected, display that
    // if multiple selected, dispaly number



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
        // could change value to "Product categories"
        value={productCategories}
        onChange={handleCheckboxChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={selected => `${selected.length} selected`}
        // MenuProps={MenuProps}
      >

        {/* Mapped Product Categories */}
        {categoryNames.map(category => (
          // <pre>{category.name}</pre>
          <MenuItem key={category.id} value={category.name}
          onChange={handleCheckboxChange}
          >
            <Checkbox
              checked={productCategories.includes(category.name)}
            />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}

        {/* Other selection
        <MenuItem key={categoryNames.length} value={"Other"}>
          <Checkbox
            checked={otherIsChecked}
            // onChange={handleCheckboxChange}
            value="Other"
          />
          <ListItemText primary={"Other.."} />
        </MenuItem> */}
      </Select>

     










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







 {/*         
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
        </FormGroup> */}