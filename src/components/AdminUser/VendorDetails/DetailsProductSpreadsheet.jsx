import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Modal,
} from "@mui/material";
import { Icon } from "@iconify/react";

function DetailsProductSpreadsheet({ spreadsheets }) {
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState(false);
  const [selectedSpreadsheet, setSelectedSpreadsheet] = useState(null);

  const handlePSpreadsheetPreview = (spreadsheet) => {
    setSelectedSpreadsheet(spreadsheet);
    setOpen(true);
  };

  const handlePSpreadsheetDownload = (spreadsheet) => {
    setSelectedSpreadsheet(spreadsheet);
    setDownload(true);
  };

  const handlePSpreadsheetClose = () => {
    setOpen(false);
  };

  const handlePSpreadsheetApprove = (spreadsheet) => {
    // TODO: Implement the functionality to approve the product spreadsheet
  };

  const handlePSpreadsheetDeny = (spreadsheet) => {
    // TODO: Implement the functionality to deny the product spreadsheet
  };

  return (
    <div>
      <Box sx={{ maxWidth: "800px"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Spreadsheets</TableCell>
              <TableCell>Review Document</TableCell>
              <TableCell>Date Vendor Submitted</TableCell>
              <TableCell>Requirements Met</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spreadsheets &&
              spreadsheets.map((spreadsheet) => (
                <TableRow key={spreadsheet.id}>
                  <TableCell>{spreadsheet.name}</TableCell>
                  <TableCell>
                    <Icon
                      icon="material-symbols:preview"
                      style={{
                        fontSize: "30px",
                        color: "#75907b",
                        cursor: "pointer",
                      }}
                      onClick={() => handlePSpreadsheetPreview(spreadsheet)}
                    ></Icon>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        backgroundColor: "#EF6C00",
                        padding: "4px 10px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onClick={() => handlePSpreadsheetDownload(spreadsheet)}
                    >
                      Download
                    </Button>
                  </TableCell>
                  <TableCell>{spreadsheet.dateSubmitted}</TableCell>
                  <TableCell>
                    <Icon
                      icon="mdi:check-decagram"
                      style={{
                        fontSize: "30px",
                        color: "#286264",
                        cursor: "pointer",
                      }}
                      onClick={() => handlePSpreadsheetApprove(spreadsheet)}
                    ></Icon>
                    <Icon
                      icon="bxs:x-circle"
                      style={{
                        fontSize: "30px",
                        color: "#F21E1E",
                        cursor: "pointer",
                      }}
                      onClick={() => handlePSpreadsheetDeny(spreadsheet)}
                    ></Icon>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {/* <Modal open={open} onClose={handleClose}>
        <div> */}
        {/* Modal content for editing the selected spreadsheet */}
        {/* Add some content here */}
        {/* <h2>Edit Spreadsheet</h2> */}
        {/* ... other content ... */}
        {/* </div>
      </Modal> */}
      </Box>
    </div>
  );
}

export default DetailsProductSpreadsheet;

// ****** TODO: HANDLE DROPBOX API SPREADSHEETS TODO: ******
// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Button,
//   Modal,
// } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";

// function DetailsProductSpreadsheet({ spreadsheets }) {
//     const [open, setOpen] = useState(false);
//     const [selectedSpreadsheet, setSelectedSpreadsheet] = useState(null);

//     const handleOpen = (spreadsheet) => {
//       setSelectedSpreadsheet(spreadsheet);
//       setOpen(true);
//     };

//     const handleClose = () => {
//       setOpen(false);
//     };

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
//           {spreadsheets &&
//             spreadsheets.map((spreadsheet) => (
//               <TableRow key={spreadsheet.id}>
//                 <TableCell>{spreadsheet.name}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleOpen(spreadsheet)}
//                   >
//                     Edit
//                   </Button>
//                   {/* ... other buttons for Preview and Download */}
//                 </TableCell>
//                 <TableCell>{spreadsheet.dateSubmitted}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     disabled={spreadsheet.approved}
//                   >
//                     <CheckIcon />
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     disabled={spreadsheet.approved}
//                   >
//                     <CloseIcon />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//       <Modal open={open} onClose={handleClose}>
//         <div>
//           {/* Modal content for editing the selected spreadsheet */}
//           {/* Add some content here */}
//           <h2>Edit Spreadsheet</h2>
//           {/* ... other content ... */}
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default DetailsProductSpreadsheet;
