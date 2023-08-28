// * - IMPORTING -
// React
import React from "react";

// * - EmailQuestion Component -
function EmailQuestion({ email, setEmail }) {
  return (
    <div>
      <label>
        Email
        <input
          type="text"
          name="Email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
    </div>
  );
} // * - END EmailQuestion Component -

// * Exporting EmailQuestion Component
export default EmailQuestion;
