// * - IMPORTING -
// React
import React from "react";
// MUI
// Components

// * - AccountVerification COMPONENT -
function AccountVerification({ status }) {
  console.log("status is:", status);

  // * - RENDERING -
  return (
    <div
      style={{
        width: "60%",
        margin: "5rem auto",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        border: "solid black 3px",
      }}
    >
      <header>
        <h2>Account Verification Component</h2>
      </header>

      <main>
        Status: {status}
        <div>
          {/* Message will go here */}
          {/* Redux to keep track of messages and status? */}

          {/* Vendor Status & Messages
  // switch statement for setting vendor status message depending on status
  const vendorStatusReducer = (state = {}, action) => {
  console.log("action.payload:", action.payload);
  switch (action.type) {
  case "SET_VENDOR_STATUS":
return action.payload;
default:
return state;
}
}; */}
        </div>
      </main>
    </div>
  );
} // * - END AccountVerification COMPONENT -

// * Exporting AccountVerification Component
export default AccountVerification;
