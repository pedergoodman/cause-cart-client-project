import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Typography,
} from '@mui/material';

import DetailsModalHeader from '../VendorDetails/DetailsModalHeader';
import DetailsProductSpreadsheet from '../VendorDetails/DetailsProductSpreadsheet';
import DetailsContract from '../VendorDetails/DetailsContract';

import {
  mockSpreadsheets,
  mockContracts,
} from '../VendorDetails/mockDetailsData';

import { Icon } from '@iconify/react';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: '12px',
      fontStyle: 'normal',
      color: '#286264',
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: '12px',
      fontStyle: 'italic',
      color: '#286264',
    },
    body1: {
      fontSize: '14px',
      fontStyle: 'normal',
      color: 'rgba(0, 0, 0, 0.87)',
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
  const vendorDetails = useSelector((state) => state.vendorDetails.vendorDetails);

  useEffect(() => {
    if (vendorId) {
      dispatch({ type: 'FETCH_VENDOR_DETAILS_REQUEST', payload: vendorId });
    }
  }, [dispatch, vendorId]);

  if (!vendorDetails || vendorDetails.length === 0) {
    return null;
  }

  const vendor = vendorDetails[0];

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            maxHeight: '925px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: '25px',
            overflow: 'auto',
          }}
        >
         <DetailsModalHeader onboardingStage={vendor.onboardingStage} />
         <Box display="flex" flexDirection="column" padding="25px 25px 0px 25px">
            <Box flexDirection="column" marginBottom="16px">
              <Typography
                variant="h4"
                sx={{ textAlign: 'center', color: '#286264' }}
              >
                {vendor.vendorName}
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6} marginBottom="16px">
                <Box display="flex" flexDirection="column">
                  <Typography variant="subtitle1">Email:</Typography>
                  <Typography variant="body1">
                    <a href={`mailto:${vendor.email}`} style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                      <Icon icon="mdi:email-fast-outline" width="20" height="20" style={{ marginRight: '8px' }} />
                      {vendor.email}
                    </a>
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" mt={1}>
                  <Typography variant="subtitle1">Website:</Typography>
                  <Typography variant="body1">
                    <a href={vendor.website} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                      <Icon icon="fluent:window-new-24-regular" width="20" height="20" style={{ marginRight: '8px' }} />
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
                <Box display="flex" flexDirection="column" mt={1}>
                  <Typography variant="subtitle1">Primary Product Category:</Typography>
                  <Typography variant="body1">{vendor.primaryProductCategory}</Typography>
                </Box>
                <Box display="flex" flexDirection="column" mt={1}>
                  <Typography variant="subtitle1">Number of Products:</Typography>
                  <Typography variant="body1">{vendor.numberOfProducts}</Typography>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Box display="flex" flexDirection="column" marginBottom={1}>
                <Typography variant="subtitle1">
                  Does your product currently offer a giveback?
                </Typography>
                <Typography variant="subtitle2">
                  {vendor.vendorGiveback ? 'Yes' : 'No'}
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
                  {vendor.partnerNonProfit ? 'Yes' : 'No'}
                </Typography>
                {vendor.partnerNonProfit && (
                  <TypographyWithDivider>
                    {vendor.nonprofitName}
                  </TypographyWithDivider>
                )}
              </Box>
              <Box display="flex" flexDirection="column" marginBottom={1}>
                <Typography variant="subtitle1">
                  How did you hear about us?
                </Typography>
                <TypographyWithDivider>{vendor.hearAboutUs}</TypographyWithDivider>
              </Box>
            </Box>
          </Box>
          <DetailsProductSpreadsheet spreadsheets={mockSpreadsheets} />
          <DetailsContract contracts={mockContracts} />
          <Box
            sx={{
              backgroundColor: '#C2D2D2',
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '25px',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#286264',
                '&:hover': {
                  backgroundColor: '#75907b',
                },
              }}
              startIcon={
                <Icon
                  icon="fluent:box-checkmark-24-regular"
                  color="white"
                  width="20"
                  height="20"
                  sx={{ mr: 1 }}
                />
              }
            >
              Approve Products
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default VendorDetails;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import {
//   Box,
//   Button,
//   Card,
//   Divider,
//   Grid,
//   IconButton,
//   Modal,
//   Typography,
// } from "@mui/material";

// import DetailsModalHeader from "../VendorDetails/DetailsModalHeader";
// import DetailsProductSpreadsheet from "../VendorDetails/DetailsProductSpreadsheet";
// import DetailsContract from "../VendorDetails/DetailsContract";

// import {
//   mockSpreadsheets,
//   mockContracts,
// } from "../VendorDetails/mockDetailsData";

// import { Icon } from "@iconify/react";

// const theme = createTheme({
//   typography: {
//     subtitle1: {
//       //   fontFamily: "Roboto",
//       fontSize: "12px",
//       fontStyle: "normal",
//       color: "#286264",
//       fontWeight: 700,
//     },
//     subtitle2: {
//         //   fontFamily: "Roboto",
//         fontSize: "12px",
//         fontStyle: "italic",
//         color: "#286264",
//       },
//       body1: {
//         //   fontFamily: "Roboto",
//         fontSize: "14px",
//         fontStyle: "normal",
//         color: "#0000de",
//       },
//   },
// });

// const TypographyWithDivider = ({ children }) => (
//     <Box>
//       <Typography variant="body1">{children}</Typography>
//       <Divider />
//     </Box>
//   );

// function VendorDetails({ open, onClose, vendorId }) {
//   const dispatch = useDispatch();
//   const vendorDetails = useSelector(
//     (state) => state.vendorDetails.vendorDetails
//   );

//   useEffect(() => {
//     if (vendorId) {
//       dispatch({ type: "FETCH_VENDOR_DETAILS_REQUEST", payload: vendorId });
//     }
//   }, [dispatch, vendorId]);

//   if (!vendorDetails || vendorDetails.length === 0) {
//     return null;
//   }

//   const vendor = vendorDetails[0];

//   return (
//  <ThemeProvider theme={theme}>
//       <Modal open={open} onClose={onClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '600px',
//             maxHeight: '925px',
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             borderRadius: '25px',
//           }}
//         >
//           {/* <DetailsModalHeader onboardingStage={vendor.onboardingStage} tasksCount=// pass the tasks count here /> */}
//           <DetailsModalHeader onboardingStage={vendor.onboardingStage} />
//           <Box display="flex" flexDirection="column" padding="25px 25px 0px 25px">
//             <Box flexDirection="column" marginBottom="16px">
//               <Typography
//                 variant="h4"
//                 sx={{ textAlign: "center", color: "#286264" }}
//               >
//                 {vendor.vendorName}
//               </Typography>
//             {/* </Box>
//             <Box display="flex" justifyContent="space-between" mb={2}>
//               <Box flex={1} mr={2}>
//                 <Box display="flex" flexDirection="column">
//                   <Typography variant="subtitle1">Email:</Typography>
//                   <Typography variant="body1">{vendor.email}</Typography>
//                 </Box>
//                 <Box display="flex" flexDirection="column" mt={1}>
//                   <Typography variant="subtitle1">Website:</Typography>
//                   <Typography variant="body1">{vendor.website}</Typography>
//                 </Box>
//                 <Box display="flex" flexDirection="column" mt={1}>
//                   <Typography variant="subtitle1">Country:</Typography>
//                   <Typography variant="body1">{vendor.country}</Typography>
//                 </Box>
//               </Box>
//               <Box display="flex" justifyContent="space-between" mb={2}>
//                 <Box flex={1} mr={2}>
//                   <Box display="flex" flexDirection="column">
//                     <Typography variant="subtitle1">Business Type:</Typography>
//                     <Typography variant="body1">
//                       {vendor.businessType}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" flexDirection="column" mt={1}>
//                     <Typography variant="subtitle1">
//                       Primary Product Category:
//                     </Typography>
//                     <Typography variant="body1">
//                       {vendor.primaryProductCategory}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" flexDirection="column" mt={1}>
//                     <Typography variant="subtitle1">
//                       Number of Products:
//                     </Typography>
//                     <Typography variant="body1">
//                       {vendor.numberOfProducts}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box> */}
// <Grid container spacing={2}>
//   <Grid item xs={6}>
//   <Box display="flex" flexDirection="column">
//   <Typography variant="subtitle1">Email:</Typography>
//   <Typography variant="body1">
//     <a href={`mailto:${vendor.email}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
//       <Icon icon="mdi:email-fast-outline" width="20" height="20" style={{ marginRight: '8px' }} />
//       {vendor.email}
//     </a>
//   </Typography>
// </Box>

// <Box display="flex" flexDirection="column" mt={1}>
//   <Typography variant="subtitle1">Website:</Typography>
//   <Typography variant="body1">
//     <a href={vendor.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
//       <Icon icon="fluent:window-new-24-regular" width="20" height="20" style={{ marginRight: '8px' }} />
//       {vendor.website}
//     </a>
//   </Typography>
// </Box>

//     <Box display="flex" flexDirection="column" mt={1}>
//       <Typography variant="subtitle1">Country:</Typography>
//       <Typography variant="body1">{vendor.country}</Typography>
//     </Box>
//   </Grid>
//   <Grid item xs={6}>
//     <Box display="flex" flexDirection="column">
//       <Typography variant="subtitle1">Business Type:</Typography>
//       <Typography variant="body1">{vendor.businessType}</Typography>
//     </Box>
//     <Box display="flex" flexDirection="column" mt={1}>
//       <Typography variant="subtitle1">Primary Product Category:</Typography>
//       <Typography variant="body1">{vendor.primaryProductCategory}</Typography>
//     </Box>
//     <Box display="flex" flexDirection="column" mt={1}>
//       <Typography variant="subtitle1">Number of Products:</Typography>
//       <Typography variant="body1">{vendor.numberOfProducts}</Typography>
//     </Box>
//   </Grid>
// </Grid>

//             <Box>
//               <Box display="flex" flexDirection="column" marginBottom={1}>
//                 <Typography variant="subtitle1">
//                   Does your product currently offer a giveback?
//                 </Typography>
//                 <Typography variant="subtitle2">
//                   {vendor.vendorGiveback ? "Yes" : "No"}
//                 </Typography>
//                 {vendor.vendorGiveback && (
//                   <TypographyWithDivider>
//                     {vendor.givebackDescription}
//                     </TypographyWithDivider>
//                 )}
//               </Box>

//               <Box display="flex" flexDirection="column" marginBottom={1}>
//                 <Typography variant="subtitle1">
//                   Do you currently partner with a non-profit?
//                 </Typography>
//                 <Typography variant="subtitle2">
//                   {vendor.partnerNonProfit ? "Yes" : "No"}
//                 </Typography>
//                 {vendor.partnerNonProfit && (
//                   <TypographyWithDivider>
//                     {vendor.nonprofitName}
//                     </TypographyWithDivider>
//                 )}
//               </Box>
//               <Box display="flex" flexDirection="column" marginBottom={1}>
//                 <Typography variant="subtitle1">
//                   How did you hear about us?
//                 </Typography>
//                 <TypographyWithDivider>{vendor.hearAboutUs}</TypographyWithDivider>
//               </Box>
//             </Box>
//           </Box>
//           <DetailsProductSpreadsheet spreadsheets={mockSpreadsheets} />
//           <DetailsContract contracts={mockContracts} />
//           <Box
//             sx={{
//               backgroundColor: '#C2D2D2',
//               display: 'flex',
//               justifyContent: 'flex-end',
//               padding: '25px',
//             }}
//           >
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: '#286264',
//                 '&:hover': {
//                   backgroundColor: '#75907b',
//                 },
//               }}
//               startIcon={
//                 <Icon
//                   icon="fluent:box-checkmark-24-regular"
//                   color="white"
//                   width="20"
//                   height="20"
//                   sx={{ mr: 1 }}
//                 />
//               }
//             >
//               Approve Products
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default VendorDetails;

/*
TODO: BEFORE DATABASE CONNECTION
    <>
      <Modal>
        <Typography variant="h1">Vendor Name: {vendor.vendorName}</Typography>
        <Typography variant="subtitle1">Email: {vendor.email}</Typography>
        <Typography variant="subtitle1">Website: {vendor.website}</Typography>
        <Typography variant="subtitle1">Country: {vendor.country}</Typography>
        <Typography variant="subtitle1">
          Business Type: {vendor.businessType}
        </Typography>
        <Typography variant="subtitle1">
          Primary Product Category: {vendor.primaryProductCategory}
        </Typography>
        <Typography variant="subtitle1">
          Number of Products: {vendor.numberOfProducts}
        </Typography>
        <Typography variant="subtitle1">
          Does your product currently offer a giveback? {vendor.vendorGiveback}
        </Typography>
        <Typography variant="subtitle1">
          Do you currently partner with a non-profit? {vendor.partnerNonProfit}
        </Typography>
        <Typography variant="subtitle1">
          How did you hear about us? {vendor.hearAboutUs}
        </Typography>
      </Modal>
    </>

*/

// const ModalHeader = ({ onboardingStage, tasksCount }) => {
//   return (
//     <div>
//       <Typography variant="h6">
//         Onboarding Stage: {onboardingStage}
//       </Typography>
//       <Button variant="contained" color="primary">
//         Pending Tasks{' '}
//         <Badge badgeContent={tasksCount} color="error">
//           <WarningIcon />
//         </Badge>
//       </Button>
//     </div>
//   );
// };

// export default ModalHeader;

// import React from 'react';
// import { Typography } from '@mui/material';

// const VendorDetails = ({ vendor }) => {
//   return (
//     <div>
//       <Typography variant="subtitle1">Brand Name: {vendor.brandName}</Typography>
//       <Typography variant="subtitle1">Email: {vendor.email}</Typography>
//       {/* ... other vendor details */}
//     </div>
//   );
// };

// export default VendorDetails;

// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableHead, TableRow, Button, Modal } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';

// const ProductSpreadsheet = ({ spreadsheets }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedSpreadsheet, setSelectedSpreadsheet] = useState(null);

//   const handleOpen = (spreadsheet) => {
//     setSelectedSpreadsheet(spreadsheet);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Product Spreadsheets</TableCell>
//             <TableCell>Review Document</TableCell>
//             <TableCell>Date Vendor Submitted</TableCell>
//             <TableCell>Requirements Met</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {spreadsheets.map((spreadsheet) => (
//             <TableRow key={spreadsheet.id}>
//               <TableCell>{spreadsheet.name}</TableCell>
//               <TableCell>
//                 <Button variant="contained" color="primary" onClick={() => handleOpen(spreadsheet)}>
//                   Edit
//                 </Button>
//                 {/* ... other buttons for Preview and Download */}
//               </TableCell>
//               <TableCell>{spreadsheet.dateSubmitted}</TableCell>
//               <TableCell>
//                 <Button variant="contained" color="primary" disabled={spreadsheet.approved}>
//                   <CheckIcon />
//                 </Button>
//                 <Button variant="contained" color="secondary" disabled={spreadsheet.approved}>
//                   <CloseIcon />
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Modal open={open} onClose={handleClose}>
//         {/* Modal content for editing the selected spreadsheet */}
//       </Modal>
//     </div>
//   );
// };

// export default ProductSpreadsheet;

// import React from 'react';
// import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';

// const Contract = ({ contracts }) => {
//   return (
//     <div>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Contract</TableCell>
//             <TableCell>View Document</TableCell>
//             <TableCell>Requirements Met</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {contracts.map((contract) => (
//             <TableRow key={contract.id}>
//               <TableCell>{contract.name}</TableCell>
//               <TableCell>
//                 <Button variant="contained" color="primary">
//                   Preview
//                 </Button>
//                 <Button variant="contained" color="secondary">
//                   Download
//                 </Button>
//               </TableCell>
//               <TableCell>
//                 <Button variant="contained" color="primary" disabled={contract.approved}>
//                   <CheckIcon />
//                 </Button>
//                 <Button variant="contained" color="secondary" disabled={contract.approved}>
//                   <CloseIcon />
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button variant="contained" color="primary">
//         Approve Products
//       </Button>
//     </div>
//   );
// };

// export default Contract;

// import axios from 'axios';

// const getTemporaryLink = async (path) => {
//   try {
//     const response = await axios.post(
//       'https://api.dropboxapi.com/2/files/get_temporary_link',
//       { path },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.DROPBOX_ACCESS_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response.data.link;
//   } catch (error) {
//     console.error('Error getting temporary link:', error);
//     return null;
//   }
// };
