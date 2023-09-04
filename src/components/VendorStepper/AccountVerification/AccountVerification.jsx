// * - IMPORTING -
// React
import React from "react";
// MUI
// Components

// * - AccountVerification COMPONENT -
function AccountVerification() {

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
        Status: {/* Status will go here */}
        <div>
          {/* Message will go here */}
          {/* Redux to keep track of messages and status? */}
        </div>
      </main>
    </div>
  );
} // * - END AccountVerification COMPONENT -

// * Exporting AccountVerification Component
export default AccountVerification;
