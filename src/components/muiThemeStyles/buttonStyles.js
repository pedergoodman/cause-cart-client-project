import React from "react";
import { Button } from "@mui/material";

const BaseButton = ({ children, ...props }) => {
  return (
    <Button
      style={{
        backgroundColor: "teal",
        color: "white",
        "&:hover": {
          backgroundColor: "#42a5f5",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
