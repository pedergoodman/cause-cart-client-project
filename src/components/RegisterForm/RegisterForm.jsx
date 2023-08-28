// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// CSS
import "./RegisterForm.css";
// MUI
import { Box } from "@mui/material";
// Components
import BrandNameQuestion from "./FormQuestions/BrandNameQuestion/BrandNameQuestion";
import BusinessTypeQuestion from "./FormQuestions/BusinessTypeQuestion/BusinessTypeQuestion";
import WebsiteURL from "./FormQuestions/WebsiteURL/WebsiteURL";
import EmailQuestion from "./FormQuestions/EmailQuestion/EmailQuestion";
import PasswordQuestion from "./FormQuestions/PasswordQuestion/PasswordQuestion";
import GiveBackQuestion from "./FormQuestions/GiveBackQuestion/GiveBackQuestion";
import NonProfitPartnerQuestion from "./FormQuestions/NonProfitPartnerQuestion/NonProfitPartnerQuestion";
import NumberOfProductsQuestion from "./FormQuestions/NumberOfProductsQuestion/NumberOfQuestions";
import ReEnterPasswordQuestion from "./FormQuestions/ReEnterPasswordQuestion/ReEnterPasswordQuestion";

// * - RegisterForm COMPONENT -
function RegisterForm() {
  // * - STATE -
  // * Form Input Fields
  const [brandName, setBrandName] = useState(""); // Brand name
  const [websiteURL, setWebsiteURLl] = useState(""); // Website URL
  const [businessType, setBusinessType] = useState(""); // Business type
  const [email, setEmail] = useState(""); // Email
  const [password, setPassword] = useState(""); // Password
  const [reEnterPassword, setReEnterPassword] = useState(""); // Re-enter password
  const [giveBack, setGiveBack] = useState(""); // Give back
  const [nonProfitPartner, setNonProfitPartner] = useState(""); // Non-profit partner
  const [numberOfProducts, setNumberOfProducts] = useState(""); // Non-profit partner

  // * - DECLARATIONS -
  const errors = useSelector((store) => store.errors); // Input Field Errors
  const dispatch = useDispatch(); // useDispatch as Variable

  // * Function to register vendor
  const registerUser = (event) => {
    // Prevent default
    event.preventDefault();

    // Dispatching action payload of vender info for account registration
    dispatch({
      type: "REGISTER",
      payload: {
        email: email,
        password: password,
      },
    });
  }; // end registerUser

  // * - RENDERING -
  return (
    //  Form Box Container
    <Box>
      <form className="formPanel register-form-box" onSubmit={registerUser}>
        <h2 className="register-form-h2">
          Grow your business while being sustainable
        </h2>
        {/* Error Prompts */}
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}

        {/* Input Field Box Container */}
        <Box className="register-form-input-field-box">
          {/* Form Questions */}
          {/* Brand Name */}
          <BrandNameQuestion
            brandname={brandName}
            setBrandname={setBrandName}
          />
          {/* Website URL */}
          <WebsiteURL websiteURL={websiteURL} setWebsiteURLl={setWebsiteURLl} />
          {/* Business Type */}
          <BusinessTypeQuestion
            businessType={businessType}
            setBusinessType={setBusinessType}
          />
          {/* Email */}
          <EmailQuestion email={email} setEmail={setEmail} />
          {/* Password */}
          <PasswordQuestion password={password} setEmail={setPassword} />
          {/* Re-enter Password */}
          <ReEnterPasswordQuestion
            reEnterPassword={reEnterPassword}
            setReEnterPassword={setReEnterPassword}
          />
          {/* Offer Give Back */}
          {/* Conditional rendering functionality */}
          <GiveBackQuestion setGiveBack={setGiveBack} giveBack={giveBack} />
          {/* Partner with Non-Profit */}
          {/* Conditional rendering functionality */}
          <NonProfitPartnerQuestion
            setNonProfitPartner={setNonProfitPartner}
            nonProfitPartner={nonProfitPartner}
          />
          {/* Number of Products */}
          <NumberOfProductsQuestion
            numberOfProducts={numberOfProducts}
            setNumberOfProducts={setNumberOfProducts}
          />

          {/* Register Button */}
          <div>
            <input
              className="btn"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </Box>
      </form>
    </Box>
  );
} // * - END RegisterForm COMPONENT -

// * RegisterForm COMPONENT
export default RegisterForm;
