// * - IMPORTING -
// React
import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Router
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// * - RegisterButton COMPONENT -
function RegisterButton({
  brandName,
  websiteURL,
  businessType,
  email,
  password,
  reEnterPassword,
  country,
  productCategories,
  prodCategoryOtherOptionInput,
  numberOfProducts,
  giveBack,
  giveBackDescriptionFieldInput,
  nonProfitPartner,
  nonProfitPartnerDescriptionFieldInput,
  howDidYouHear,
}) {
  // * - DECLARATIONS -
  const dispatch = useDispatch(); // Declaring useDispatch as variable
  const history = useHistory(); // Declaring useHistory as variable

  // * All vendor form data
  const vendorFormData = {
    brandName: brandName,
    websiteURL: websiteURL,
    businessType: businessType,
    email: email,
    password: password,
    reEnterPassword: reEnterPassword,
    country: country,
    productCategories: productCategories,
    numberOfProducts: numberOfProducts,
    giveBack: giveBack,
    giveBackDescriptionFieldInput: giveBackDescriptionFieldInput,
    nonProfitPartner: nonProfitPartner,
    nonProfitPartnerDescriptionFieldInput:
      nonProfitPartnerDescriptionFieldInput,
    howDidYouHear: howDidYouHear,
  };

  // Logging
  console.log("vendorFormData is:", vendorFormData);

  // * Function to register vendor
  const registerUser = (event) => {
    // Prevent default
    event.preventDefault();

    // Conditional for sending dispatch: no property values null, password and re-enter password match
    // Dispatching action payload of vender info for account registration
    dispatch({
      type: "REGISTER",
      payload: vendorFormData,
    });
  }; // end registerUser

  // * - RENDERING -
  return (
    // Register Button
    <div className="register-button" onClick={registerUser}>
      <input className="btn" type="submit" name="submit" value="Register" />
    </div>
  );
} // * - END RegisterButton COMPONENT -

// * Exporting RegisterButton Component
export default RegisterButton;
