// * - IMPORTING -
// React
import React from "react";

// * - ReEnterPasswordQuestion Component -
function ReEnterPasswordQuestion({ reEnterPassword, setReEnterPassword }) {
  return (
    <div>
      <label>
        Re-enter password
        <input
          type="text"
          name="password"
          value={reEnterPassword}
          required
          onChange={(event) => setReEnterPassword(event.target.value)}
        />
      </label>
    </div>
  );
} // * - END ReEnterPasswordQuestion Component -

// * Exporting ReEnterPasswordQuestion Component
export default ReEnterPasswordQuestion;
