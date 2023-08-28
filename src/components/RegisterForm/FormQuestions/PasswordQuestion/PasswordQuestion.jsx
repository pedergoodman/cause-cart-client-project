// * - IMPORTING -
// React
import React from "react";

// * - PasswordQuestion Component -
function PasswordQuestion({ password, setPassword }) {
  return (
    <div>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
    </div>
  );
} // * - END PasswordQuestion Component -

// * Exporting PasswordQuestion Component
export default PasswordQuestion;
