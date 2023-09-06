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
import DenyApplication from "../AdminButtons/DenyApplication";

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
  const vendorDetails = useSelector(state => state.vendorDetails.vendorDetails);

  useEffect(() => {
    if (vendorId) {
      dispatch({ type: "FETCH_VENDOR_DETAILS_REQUEST", payload: vendorId });
    }
  }, [dispatch, vendorId]);

  if (!vendorDetails || vendorDetails.length === 0) {
    return null;
  }

  const vendor = vendorDetails[0];

  //   const handleApproveProducts = () => {
  //     const approvedProductStage = "Approved Product";
  //     dispatch({
  //       type: "UPDATE_ONBOARDING_STAGE",
  //       payload: { id: vendor.id, newOnboardingStage: approvedProductStage },
  //     });
  //     onClose();
  //   };

  // grab folder path
  const dropboxFolderPath = vendor.dropboxFolderPath;
  const dropboxSharedLink = vendor.dropboxSharedLink;

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
                    <a
                      href={`mailto:${vendor.email}`}
                      style={{
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Icon
                        icon="mdi:email-fast-outline"
                        width="20"
                        height="20"
                        style={{ marginRight: "8px" }}
                      />
                      {vendor.email}
                    </a>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" mt={1}>
                  <Typography variant="subtitle1">Website:</Typography>
                  <Typography variant="body1">
                    <a
                      href={vendor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
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
                    {vendor.selectedCategories?.map(category => (
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

          <Box
            sx={{
              backgroundColor: "#C2D2D2",
              display: "flex",
              justifyContent: "flex-end",
              padding: "25px",
            }}
          >
            <DenyApplication vendor={vendor} onClose={onClose} />
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default VendorDetails;
