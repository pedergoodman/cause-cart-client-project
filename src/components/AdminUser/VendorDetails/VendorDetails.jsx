import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";

import DetailsModalHeader from "../VendorDetails/DetailsModalHeader";
import DropboxFileContainer from "../../DropboxComponents/DropboxFileContainer/DropboxFileContainer";

import ApproveIntakeForm from "../AdminButtons/ApproveIntakeForm";
import SendContract from "../AdminButtons/SendContract";
import SendProductTemplates from "../AdminButtons/SendProductTemplates";
import ApproveProductSpreadsheet from "../AdminButtons/ApproveProductSpreadsheet";

import DeniedApplicationStatus from "../AdminButtons/DeniedApplicationStatus";
import CompletedOnboardingStatus from "../AdminButtons/CompletedOnboardingStatus";

// The following components are used when the vendor has not yet responded
import AwaitingVendorSentContract from "../AdminButtons/AwaitingVendorSentContract";
import AwaitingVendorSentProductSheet from "../AdminButtons/AwaitingVendorSentProductSheet";

import { Icon } from "@iconify/react";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: "12px",
      fontStyle: "normal",
      color: "#286264",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "12px",
      fontStyle: "italic",
      color: "#286264",
    },
    body1: {
      fontSize: "14px",
      fontStyle: "normal",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
});

const TypographyWithDivider = ({ children }) => (
  <Box>
    <Typography variant="body1">{children}</Typography>
    <Divider />
  </Box>
);

function VendorDetails({ open, onClose, vendorId }) {
  const dispatch = useDispatch();
  const vendorDetails = useSelector(
    (state) => state.vendorDetails.vendorDetails
  );

  useEffect(() => {
    if (vendorId) {
      dispatch({ type: "FETCH_VENDOR_DETAILS_REQUEST", payload: vendorId });
    }
  }, [dispatch, vendorId]);

  if (!vendorDetails || vendorDetails.length === 0) {
    return null;
  }

  const vendor = vendorDetails[0];

  // grab folder path
  const dropboxFolderPath = vendor.dropboxFolderPath;
  const dropboxSharedLink = vendor.dropboxSharedLink;

  // TODO: SWITCH DEPENDING ON VENDOR ONBOARDING STATUS
  function getOnboardingComponent(onboardingStatusId, vendor, onClose) {
    // console.log("Current status_id: ", onboardingStatusId);
    switch (onboardingStatusId) {
      case 1:
        return <ApproveIntakeForm vendor={vendor} onClose={onClose} />;
      case 2:
        return <SendContract vendor={vendor} onClose={onClose} />;
      case 3:
        return (
          <AwaitingVendorSentContract
            vendor={vendor}
            dateEdited={vendor.dateEdited}
            vendorEmail={vendor.email}
            onClose={onClose}
          />
        );
      case 4:
        return <SendProductTemplates vendor={vendor} onClose={onClose} />;
      case 5:
        return (
          <AwaitingVendorSentProductSheet
            vendor={vendor}
            dateEdited={vendor.dateEdited}
            vendorEmail={vendor.email}
            onClose={onClose}
          />
        );
      case 6:
        return <ApproveProductSpreadsheet vendor={vendor} onClose={onClose} />;
      case 7:
        return (
          <DeniedApplicationStatus
            vendor={vendor}
            dateEdited={vendor.dateEdited}
            vendorEmail={vendor.email}
            onClose={onClose}
          />
        );
      case 8:
        return (
          <CompletedOnboardingStatus
            vendor={vendor}
            dateEdited={vendor.dateEdited}
            onClose={onClose}
          />
        );
      // TODO: STRETCH PAUSE ONBOARDING
      //   case 9:
      //     return <PausedOnboardingStatus vendor={vendor} onClose={onClose} />;
      default:
        return null;
    }
  }

  const onboardingComponent = getOnboardingComponent(
    vendor.onboardingStatusId,
    vendor,
    onClose
  );

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            maxHeight: "925px",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "25px",
            overflow: "auto",
          }}
        >
          <DetailsModalHeader status={vendor.onboardingStatus} />
          <Box
            display="flex"
            flexDirection="column"
            padding="25px 25px 0px 25px"
          >
            <Box flexDirection="column" marginBottom="16px">
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "#286264" }}
              >
                {vendor.vendorName}
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6} marginBottom="16px">
                <Box display="flex" flexDirection="column">
                  <Typography variant="subtitle1">Email:</Typography>
                  <Typography variant="body1">
                    <Box
                      onClick={() =>
                        window.open(`mailto:${vendor.email}`, "_blank")
                      }
                      style={{
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      <Icon
                        icon="mdi:email-fast-outline"
                        width="20"
                        height="20"
                        style={{ marginRight: "8px" }}
                      />
                      {vendor.email}
                    </Box>
                  </Typography>
                </Box>

                <Box display="flex" flexDirection="column" mt={1}>
                  <Typography variant="subtitle1">Website:</Typography>
                  <Typography variant="body1">
                    <a
                      href={
                        vendor.website.startsWith("http://") ||
                        vendor.website.startsWith("https://")
                          ? vendor.website
                          : `http://${vendor.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "underline",
                      }}
                    >
                      <Icon
                        icon="fluent:window-new-24-regular"
                        width="20"
                        height="20"
                        style={{ marginRight: "8px" }}
                      />
                      {vendor.website}
                    </a>
                  </Typography>
                </Box>

                <Box display="flex" flexDirection="column" mt={1}>
                  <Typography variant="subtitle1">Country:</Typography>
                  <Typography variant="body1">{vendor.country}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} marginBottom="16px">
                <Box display="flex" flexDirection="column">
                  <Typography variant="subtitle1">Business Type:</Typography>
                  <Typography variant="body1">{vendor.businessType}</Typography>
                </Box>
                <Box display="flex" flexDirection="column" marginBottom={1}>
                  <Typography variant="subtitle1">
                    Selected Categories:
                  </Typography>
                  <ul>
                    {vendor.selectedCategories?.map((category) => (
                      <li key={category}>
                        <Typography variant="body1">{category}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>

                <Box display="flex" flexDirection="column" mt={1}>
                  <Typography variant="subtitle1">
                    Number of Products:
                  </Typography>
                  <Typography variant="body1">
                    {vendor.numberOfProducts}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Box display="flex" flexDirection="column" marginBottom={1}>
                <Typography variant="subtitle1">
                  Does your product currently offer a giveback?
                </Typography>
                <Typography variant="subtitle2">
                  {vendor.vendorGiveback ? "Yes" : "No"}
                </Typography>
                {vendor.vendorGiveback && (
                  <TypographyWithDivider>
                    {vendor.givebackDescription}
                  </TypographyWithDivider>
                )}
              </Box>
              <Box display="flex" flexDirection="column" marginBottom={1}>
                <Typography variant="subtitle1">
                  Do you currently partner with a non-profit?
                </Typography>
                <Typography variant="subtitle2">
                  {vendor.partnerNonProfit ? "Yes" : "No"}
                </Typography>
                {vendor.partnerNonProfit && (
                  <TypographyWithDivider>
                    {vendor.nonprofitDescription}
                  </TypographyWithDivider>
                )}
              </Box>
              <Box display="flex" flexDirection="column" marginBottom={1}>
                <Typography variant="subtitle1">
                  How did you hear about us?
                </Typography>
                <TypographyWithDivider>
                  {vendor.hearAboutUs}
                </TypographyWithDivider>
              </Box>
            </Box>
          </Box>

          {/*
           ** DROPBOX API **

          {/* If there are files in the dropbox folder, show them */}
          <Button
            variant="contained"
            href={dropboxSharedLink}
            target="_blank"
            sx={{
              display: "flex",
              m: "15px auto",
              width: "fit-content",
              padding: "8px 20px",
              alignItems: "center",
            }}
          >
            Download from on Dropbox
          </Button>
          {dropboxFolderPath ? (
            <DropboxFileContainer
              dropboxFolderPath={dropboxFolderPath}
              dropboxSharedLink={dropboxSharedLink}
            />
          ) : (
            <></>
          )}

          {/* Onboarding Component: Switches and renders admin tasks based on onboardingStatusId (status_id) */}
          {onboardingComponent}
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default VendorDetails;
