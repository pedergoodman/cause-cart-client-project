// * - IMPORTING -
// React
import React from "react";
// Router
import { useHistory } from "react-router-dom";
// CSS
import "./RegisterPage.css"
// MUI
import { Box, Container } from "@mui/material";
// Components
import RegisterForm from "../RegisterForm/RegisterForm";

// * - RegisterPage COMPONENT -
function RegisterPage() {
  // * - DECLARATIONS -
  const history = useHistory(); //useHistory

  // * - RENDERING -
  return (
    <Container
      className="register-page-container"
      maxWidth="xl" // Standard desktop width
    >
      {/* Image */}
      <img
        className="register-page-image"
        src="/images/shane-rounce-DNkoNXQti3c-unsplash.jpg"
        alt="Image of multiple hands touching the bark of a tree."
      />
      <div className="register-page-register-form-container">
        <RegisterForm />

        {/* Login button page route */}
        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </button>
        </center>
      </div>
    </Container>
  );
} // * - END RegisterPage COMPONENT -

// * Exporting RegisterPage Component
export default RegisterPage;
