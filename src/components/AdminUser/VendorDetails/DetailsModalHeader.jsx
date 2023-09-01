import React from "react";
import { Badge, Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

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
      icon="fluent:document-arrow-right-24-regular"
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


const DetailsModalHeader = ({ onboardingStatus }) => {
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
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box backgroundColor="#F9BC9E" p={0.5}>
            {ONBOARDING_STAGE_ICONS[onboardingStatus]}
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
                {onboardingStatus}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          color="warning"
          sx={{ backgroundColor: "#F9BC9E" }}
        >
            {" "}
            Pending Tasks{""}
        </Button>
      </Box>
    </>
  );
};

export default DetailsModalHeader;
