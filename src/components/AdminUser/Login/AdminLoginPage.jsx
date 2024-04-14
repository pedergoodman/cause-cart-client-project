// * - IMPORTING -
// React
import React from "react";
// Router
import { useHistory } from "react-router-dom";
// CSS
import "../../RegisterAndLoginForm.css";

// MUI
import { Box, Container } from "@mui/material";
// Components
import AdminLoginForm from "./AdminLoginForm";


function AdminLoginPage() {
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
        <AdminLoginForm />
      </div>
    </Container>
  );
}

export default AdminLoginPage;