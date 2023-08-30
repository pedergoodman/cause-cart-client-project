import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";

const DetailsPSTable = styled(Table)({
});

const theme = createTheme({
  typography: {
    subtitle2: {
      textAlign: "center",
      fontSize: "14px",
      fontStyle: "normal",
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: 700,
    },
  },
});

const PsReviewDocumentCell = styled(TableCell)({
    display: "table-cell",
    textAlign: "center",
    verticalAlign: "middle",
    width: "200px", // specify the width
  });
  



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


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: "800px", padding: "25px 25px 12.5px 25px" }}>
        <DetailsPSTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="subtitle2"
                  style={{
                    textAlign: "left",
                  }}
                >
                  Product Spreadsheets
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant="subtitle2">Review Document</Typography>
              </TableCell>

              {/* TODO:  GRAB VENDOR PRODUCT SPREADSHEET UPLOAD/SUBMIT DATE? <TableCell>Date Vendor Submitted</TableCell> TODO: */}

            </TableRow>
          </TableHead>
          <TableBody>
            {spreadsheets &&
              spreadsheets.map((spreadsheet) => (
                <TableRow key={spreadsheet.id}>
                  <TableCell>{spreadsheet.name}</TableCell>
                  <PsReviewDocumentCell>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon="material-symbols:preview"
                        style={{
                          fontSize: "30px",
                          color: "#75907b",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                        onClick={() => handlePSpreadsheetPreview(spreadsheet)}
                      ></Icon>
                      <Button
                        variant="contained"
                        size="small"
                        style={{
                          backgroundColor: "#EF6C00",
                          fontSize: "10px",
                          padding: "4px 10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => handlePSpreadsheetDownload(spreadsheet)}
                      >
                        Download
                      </Button>
                    </div>
                  </PsReviewDocumentCell>
                  {/* TODO:  GRAB VENDOR PRODUCT SPREADSHEET UPLOAD/SUBMIT DATE? <TableCell>{spreadsheet.dateSubmitted}</TableCell> TODO: */}
            
                </TableRow>
              ))}
          </TableBody>
        </DetailsPSTable>
        {/* <Modal open={open} onClose={handleClose}>
        <div> */}
        {/* Modal content for editing the selected spreadsheet */}
        {/* Add some content here */}
        {/* <h2>Edit Spreadsheet</h2> */}
        {/* ... other content ... */}
        {/* </div>
      </Modal> */}
      </Box>
    </ThemeProvider>
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
