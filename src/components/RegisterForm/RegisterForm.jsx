// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Router
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
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
import NumberOfProductsQuestion from "./FormQuestions/NumberOfProductsQuestion/NumberOfProductsQuestions";
import ReEnterPasswordQuestion from "./FormQuestions/ReEnterPasswordQuestion/ReEnterPasswordQuestion";
import ProductCategoryQuestion from "./FormQuestions/ProductCategoryQuestion/ProductCategoryQuestion";
import CountryQuestion from "./FormQuestions/CountryQuestion/CountryQuestion";
import HowDidYouHearQuestion from "./FormQuestions/HowDidYouHearQuestion/HowDidYourHearQuestion";
import RegisterButton from "./RegisterButton/RegisterButton";

// * - RegisterForm COMPONENT -
function RegisterForm() {
  // * - STATE -
  // * Form Input Fields (in this order)
  const [brandName, setBrandName] = useState(""); // Brand name
  const [websiteURL, setWebsiteURL] = useState(""); // Website URL
  const [businessType, setBusinessType] = useState(""); // Business type
  const [email, setEmail] = useState(""); // Email
  const [password, setPassword] = useState(""); // Password
  const [reEnterPassword, setReEnterPassword] = useState(""); // Re-enter password
  const [country, setCountry] = useState(""); // Country
  const [productCategories, setProductCategories] = useState([]); // Product categories
  const [numberOfProducts, setNumberOfProducts] = useState(""); // Number of products;
  const [giveBack, setGiveBack] = useState(""); // Give back
  const [giveBackDescriptionFieldInput, setGiveBackDescriptionFieldInput] =
    useState(""); // Give back input of textfield
  const [nonProfitPartner, setNonProfitPartner] = useState(""); // Non-profit partner
  const [
    nonProfitPartnerDescriptionFieldInput,
    setNonProfitPartnerDescriptionFieldInput,
  ] = useState(""); // Non-profit input of textfield
  const [howDidYouHear, setHowDidYouHear] = useState(""); // How did you hear about us

  // * - DECLARATIONS -
  const errors = useSelector((store) => store.errors); // Input Field Errors
  const dispatch = useDispatch(); // useDispatch as Variable
  const history = useHistory(); // useHistory as variable


  // * - RENDERING -
  return (
    //  Form Box Container
    <form className="formPanel register-form-box">
      <header>
        <h2 className="register-form-h2">
          Grow your business while being sustainable
        </h2>
        {/* Cause-Cart Link and Login Route */}
        <div className="register-form-link-and-routing-container">
          {/* Link to Cause-Cart site */}
          <p>
            <a
              style={{ textDecoration: "none" }} // Gets rid of second underline of anchor tag
              href="https://cause-cart.com/"
              target="_blank"
              className="btn_asLink"
            >
              Click here to visit the Cause-Cart site
            </a>
          </p>
          <br />
          {/* Route to Login Page */}
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push("/login");
            }}
          >
            Already a vendor? Login here
          </button>
        </div>
      </header>

      {/* Input Field Box Container */}
      <Box className="register-form-input-field-container">
        {/* Form Questions */}
        {/* Brand Name */}
        <BrandNameQuestion brandname={brandName} setBrandName={setBrandName} />

        {/* Website URL */}
        <WebsiteURL websiteURL={websiteURL} setWebsiteURL={setWebsiteURL} />

        {/* Business Type */}
        <BusinessTypeQuestion
          businessType={businessType}
          setBusinessType={setBusinessType}
        />

        {/* Email */}
        <EmailQuestion email={email} setEmail={setEmail} />

        {/* Password */}
        <PasswordQuestion password={password} setPassword={setPassword} />

        {/* Re-enter Password */}
        <ReEnterPasswordQuestion
          reEnterPassword={reEnterPassword}
          setReEnterPassword={setReEnterPassword}
        />

        {/* Container for the Two Inline Components */}
        <div className="register-form-input-field-double-inline">
          {/* Country */}
          <CountryQuestion country={country} setCountry={setCountry} />

          {/* Product Category */}
          <ProductCategoryQuestion
            productCategories={productCategories}
            setProductCategories={setProductCategories}
          />
        </div>

        {/* Number of Products */}
        <NumberOfProductsQuestion
          numberOfProducts={numberOfProducts}
          setNumberOfProducts={setNumberOfProducts}
        />

        {/* Offer Give Back */}
        {/* Conditional rendering functionality */}
        <GiveBackQuestion
          setGiveBack={setGiveBack}
          giveBack={giveBack}
          giveBackDescriptionFieldInput={giveBackDescriptionFieldInput}
          setGiveBackDescriptionFieldInput={setGiveBackDescriptionFieldInput}
        />

        {/* Partner with Non-Profit */}
        {/* Conditional rendering functionality */}
        <NonProfitPartnerQuestion
          setNonProfitPartner={setNonProfitPartner}
          nonProfitPartner={nonProfitPartner}
          nonProfitPartnerDescriptionFieldInput={
            nonProfitPartnerDescriptionFieldInput
          }
          setNonProfitPartnerDescriptionFieldInput={
            setNonProfitPartnerDescriptionFieldInput
          }
        />

        {/* How Did You Hear */}
        <HowDidYouHearQuestion
          howDidYouHear={howDidYouHear}
          setHowDidYouHear={setHowDidYouHear}
        />

        {/* Error Prompts */}
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}

        {/* Register Button */}
        {/* All States of Form */}
        <RegisterButton
          brandName={brandName}
          websiteURL={websiteURL}
          businessType={businessType}
          email={email}
          password={password}
          reEnterPassword={reEnterPassword}
          country={country}
          productCategories={productCategories}
          numberOfProducts={numberOfProducts}
          giveBack={giveBack}
          giveBackDescriptionFieldInput={giveBackDescriptionFieldInput}
          nonProfitPartner={nonProfitPartner}
          nonProfitPartnerDescriptionFieldInput={
            nonProfitPartnerDescriptionFieldInput
          }
          howDidYouHear={howDidYouHear}
        />
      </Box>
    </form>
  );
} // * - END RegisterForm COMPONENT -

// * RegisterForm COMPONENT
export default RegisterForm;
