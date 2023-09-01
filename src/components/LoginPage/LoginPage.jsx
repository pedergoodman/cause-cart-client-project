// * - IMPORTING -
// React
import React from "react";
// CSS
import "../../components/RegisterAndLoginPage.css";
// MUI
import { Container } from "@mui/material";
// Components
import LoginForm from "../LoginForm/LoginForm";

// * - LoginPage COMPONENT -
function LoginPage() {
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
      <div className="register-and-login-page-form-container login-page-form-container">
        <LoginForm />
      </div>
    </Container>
  );
}

export default LoginPage;
