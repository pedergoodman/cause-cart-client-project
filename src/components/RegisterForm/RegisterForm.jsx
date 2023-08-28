// * - IMPORTING -
// React
import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// CSS
import "./RegisterForm.css";
// MUI
import { Box } from "@mui/material";

// * - RegisterForm COMPONENT -
function RegisterForm() {
  // * - STATE -
  // Form Input Fields
  const [brandname, setBrandname] = useState(""); // Brand name
  const [websiteURL, setWebsiteURLl] = useState(""); // Website URL
  const [businessType, setBusinessType] = useState(""); // Business type
  const [email, setEmail] = useState(""); // Email
  const [password, setPassword] = useState(""); // Password
  const [reEnterPassword, setReEnterPassword] = useState(""); // Re-enter password
  const [giveBack, setGiveBack] = useState(""); // Give back

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
          {/* Brand Name */}
          <div>
            <label>Brand name</label>
            <input
              type="text"
              name="brandname"
              value={brandname}
              required
              onChange={(event) => setBrandname(event.target.value)}
            />
          </div>
          {/* Website URL */}
          <div>
            <label></label>
            Website URL
            <input
              type="text"
              name="websiteURL"
              value={websiteURL}
              onChange={(event) => setWebsiteURLl(event.target.value)}
            />
          </div>
          {/* Business Type */}
          <div>
            <label></label>
            Business type
            <input
              type="text"
              name="businessType"
              value={businessType}
              onChange={(event) => setbusinessType(event.target.value)}
            />
          </div>
          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="text"
              name="Email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {/* Re-enter Password */}
          <div>
            <label>Re-enter password</label>
            <input
              type="text"
              name="reEnterPassword"
              value={reEnterPassword}
              required
              onChange={(event) => setReEnterPassword(event.target.value)}
            />
          </div>
          {/* Offer Give Back */}
          <div>
            <Box
            style={{
              inlineHeight: "20px"
            }}
            >
              <label>Does your product currently offer a give back?</label>
              <p>
                Ex: % donated, sustainable materials used, mission focused, etc?
              </p>
            </Box>
            <input
              type="text"
              name="giveBack"
              value={giveBack}
              required
              onChange={(event) => setGiveBack(event.target.value)}
            />
          </div>
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
