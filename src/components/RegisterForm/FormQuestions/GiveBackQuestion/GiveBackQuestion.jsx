// * - IMPORTING -
// React
import React from "react";

// * - GiveBackQuestion COMPONENT -
function GiveBackQuestion() {
  // * - RENDERING -
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <label>
        Does your product currently offer a give back?
        <p
          style={
            {
              // marginTop: "10px",
            }
          }
        >
          Ex: % donated, sustainable materials used, mission focused, etc?
        </p>
        {/* Give Back Choices */}
        <div>
          <label>
            <input type="radio" name="giveBack" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="giveBack" value="maybe" />
            Maybe
          </label>
          <label>
            <input type="radio" name="giveBack" value="no" />
            No
          </label>
        </div>
      </label>
    </div>
  );
}

// * Exporting GiveBackQuestion Component
export default GiveBackQuestion;
