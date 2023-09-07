import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { Badge, Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export const ONBOARDING_STAGE_ICONS = {
  "Intake Form Submitted": (
    <Icon icon="mdi:clipboard-arrow-up" style={{ fontSize: "24px" }} />
  ),
  "Approved Intake Form": (
    <Icon
      icon="mdi:clipboard-check-multiple-outline"
      style={{ fontSize: "24px" }}
    />
  ),
  "Sent Contract": (
    <Icon
      icon="fluent:document-arrow-right-24-regular"
      style={{ fontSize: "24px" }}
    />
  ),
  "Contract Submitted": (
    <Icon
      icon="fluent:document-arrow-up-20-filled"
      style={{ fontSize: "24px" }}
    />
  ),
  "Sent Product Spreadsheet": (
    <Icon
      icon="fluent:document-table-cube-20-regular"
      style={{ fontSize: "24px" }}
    />
  ),
  "Product Spreadsheet Submitted": (
    <Icon icon="fluent:box-arrow-up-20-filled" style={{ fontSize: "24px" }} />
  ),
  "Denied Application": (
    <Icon icon="octicon:x-circle-fill-16" style={{ fontSize: "20px" }} />
  ),
  "Onboarding Complete": (
    <Icon
      icon="material-symbols:heart-check-outline"
      style={{ fontSize: "24px" }}
    />
  ),
  "Paused Onboarding": (
    <Icon icon="fa6-solid:circle-pause" style={{ fontSize: "20px" }} />
  ),
};

const DetailsModalHeader = ({ status }) => {
  const isOnboardingComplete = status === "Onboarding Complete";

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="25px"
        backgroundColor={isOnboardingComplete ? "#3D9296" : "#FFEEE6"}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            p={0.5}
            backgroundColor={
              isOnboardingComplete ? "rgb(220, 235, 235)" : "#F9BC9E"
            }
          >
            {ONBOARDING_STAGE_ICONS[status]}
          </Box>
          <Box>
            <Box>
              <Typography
                variant="h7"
                align="left"
                fontWeight="bold"
                marginLeft="8px"
              >
                Onboarding Status
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" align="left" marginLeft="8px">
                {status}
              </Typography>
            </Box>
          </Box>
        </Box>

        {!isOnboardingComplete && (
          <Button
            variant="contained"
            color="warning"
            sx={{ backgroundColor: "#F9BC9E" }}
          >
            Pending Tasks
          </Button>
        )}
      </Box>
    </>
  );
};

export default DetailsModalHeader;
