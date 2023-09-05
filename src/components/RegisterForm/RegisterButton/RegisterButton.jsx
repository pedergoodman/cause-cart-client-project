import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

function RegisterButton({
  brandName,
  websiteURL,
  businessType,
  email,
  password,
  reEnterPassword,
  country,
  productCategories,
  prodCategoriesOtherOptionDescInput,
  numberOfProducts,
  giveBack,
  giveBackDescriptionFieldInput,
  nonProfitPartner,
  nonProfitPartnerDescriptionFieldInput,
  howDidYouHear,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const vendorFormData = {
    brandName: brandName,
    websiteURL: websiteURL,
    businessType: businessType,
    email: email,
    password: password,
    reEnterPassword: reEnterPassword,
    country: country,
    productCategories: productCategories,
    prodCategoriesOtherOptionDescInput: prodCategoriesOtherOptionDescInput,
    numberOfProducts: numberOfProducts,
    giveBack: giveBack,
    giveBackDescriptionFieldInput: giveBackDescriptionFieldInput,
    nonProfitPartner: nonProfitPartner,
    nonProfitPartnerDescriptionFieldInput:
      nonProfitPartnerDescriptionFieldInput,
    howDidYouHear: howDidYouHear,
  };

  const [showMissingInputErrorPrompt, setShowMissingInputErrorPrompt] =
    useState(false);
  const [showPasswordNotMatchingPrompt, setShowPasswordNotMatchingPrompt] =
    useState(false);

  const handleRegisterUser = (event) => {
    event.preventDefault();

    let passwordsMatch = true;

    for (let formInput in vendorFormData) {
      if (vendorFormData[formInput] === "") {
        setShowMissingInputErrorPrompt(true);
        return;
      }
      if (formInput === "password") {
        if (vendorFormData[formInput] !== vendorFormData.reEnterPassword) {
          passwordsMatch = false;
        }
      }
    }

    if (!passwordsMatch) {
      setShowMissingInputErrorPrompt(false);
      setShowPasswordNotMatchingPrompt(true);
      return;
    } else {
      setShowMissingInputErrorPrompt(false);
      setShowPasswordNotMatchingPrompt(false);

      dispatch({
        type: "REGISTER",
        payload: vendorFormData,
      });

      history.push("/vendorstepper");
      return;
    }
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
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
        className="register-or-login-button btn"
        variant="contained"
        type="submit"
        onClick={handleRegisterUser}
      >
        Register
      </Button>
    </div>
  );
}

export default RegisterButton;
