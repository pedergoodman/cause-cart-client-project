// * - IMPORTING -
// React
import React from "react";
// Router
import { useHistory } from "react-router-dom";
// CSS
import "../../components/RegisterAndLoginPage.css";
import "../../components/RegisterAndLoginForm.css";
// MUI
import { Box, Container } from "@mui/material";
// Components
import VendorNavBar from "../VendorUser/VendorNavBar/VendorNavBar";
import RegisterForm from "../RegisterForm/RegisterForm";

// * - RegisterPage COMPONENT -
function RegisterPage() {
  // * - DECLARATIONS -
  const history = useHistory(); //useHistory

  // * - RENDERING -
  return (
    <Container
      className="register-and-login-page-container"
      maxWidth="xl" // Standard desktop width
    >
      {/* Image */}
      <img
        className="register-and-login-page-image"
        src="/images/shane-rounce-DNkoNXQti3c-unsplash.jpg"
        alt="Image of multiple hands touching the bark of a tree."
      />
      <div className="register-and-login-page-form-container">
        <RegisterForm />
      </div>
    </Container>
  );
} // * - END RegisterPage COMPONENT -

// * Exporting RegisterPage Component
export default RegisterPage;
