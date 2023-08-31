// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
// Router
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// MUI
import { Button } from "@mui/material";

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

  // * - STATE -
  //  For displaying error message of missing/ empty fields
  const [showMissingInputErrorPrompt, setShowMissingInputErrorPrompt] =
    useState(false);
  const [showPasswordNotMatchingPrompt, setShowPasswordNotMatchingPrompt] =
    useState(false);

  // * Function to register vendor
  // Conditional for sending dispatch: no property values null, password and re-enter password match
  const handleRegisterUser = (event) => {
    // Prevent default
    event.preventDefault();

    let passwordsMatch = true; // Assume passwords match by default

    // Loop through each form property
    for (let formInput in vendorFormData) {
      console.log(`${formInput}:`, vendorFormData[formInput]);

      // if property is undefined
      if (vendorFormData[formInput] === "" || vendorFormData[formInput] === undefined) {
        setShowMissingInputErrorPrompt(true);
      }
      // if passwords do not match
      if (formInput === "password") {
        if (vendorFormData[formInput] !== vendorFormData.reEnterPassword) {
          passwordsMatch = false;
        }
      }
    }
    // don't match then set prompt true
    if (!passwordsMatch) {
      setShowPasswordNotMatchingPrompt(true);
    } // else dispatch
    else {
      setShowMissingInputErrorPrompt(false);
      setShowPasswordNotMatchingPrompt(false);
      dispatch({
        type: "REGISTER",
        payload: vendorFormData, // For account creation
      });
    }
  }; // end handleRegisterUser

  // * - RENDERING -
  return (
    // Register Button
    <div
      style={{
        width: "80%",
        margin: "0 auto", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      {/* Error Prompts */}
      <div>
        {showMissingInputErrorPrompt && (
          <p style={{ color: "#E23D28" }}>You must fill out all fields.</p>
        )}
        {showPasswordNotMatchingPrompt && (
          <p style={{ color: "#E23D28" }}>Your passwords do not match.</p>
        )}
      </div>
      <Button
        style={{ fontSize: "1rem", backgroundColor: "teal" }}
        className="register-button btn"
        variant="contained"
        type="submit"
        onClick={handleRegisterUser}
      >
        Register
      </Button>
    </div>
  );
} // * - END RegisterButton COMPONENT -

// * Exporting RegisterButton Component
export default RegisterButton;
