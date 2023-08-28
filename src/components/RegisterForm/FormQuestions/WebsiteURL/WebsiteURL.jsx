// * - IMPORTING -
// React
import React from "react";

// * - WebsiteURL Component -
function WebsiteURL({ websiteURL, setWebsiteURL }) {
  return (
    <div>
      <label>
        Website URL
        <input
          type="text"
          name="websiteURL"
          value={websiteURL}
          onChange={(event) => setWebsiteURL(event.target.value)}
        />
      </label>
    </div>
  );
} // * - END WebsiteURL Component -

// * Exporting WebsiteURL Component
export default WebsiteURL;
