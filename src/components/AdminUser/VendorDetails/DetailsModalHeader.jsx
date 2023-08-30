import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { Badge, Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const DetailsModalHeader = ({ onboardingStage, tasksCount }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="25px"
        backgroundColor="#FFF9F5"
      >
        <Typography variant="h7">
          Onboarding Stage: {onboardingStage}
        </Typography>

        <Button variant="contained" color="warning" sx={{backgroundColor:"#F9BC9E"}}>
          <Badge
            badgeContent={tasksCount}
            color="warning"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {" "}
            Pending Tasks{""}
          </Badge>
        </Button>
      </Box>
    </>
  );
};

export default DetailsModalHeader;
