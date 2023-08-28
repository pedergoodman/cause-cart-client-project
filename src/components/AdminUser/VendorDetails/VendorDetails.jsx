import React from 'react';
import { Badge, Button, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';



function VendorDetails() {

    // return (

    // );
}

export default VendorDetails;



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

