import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
  },
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
      <Box sx={{ maxWidth: "800px", padding: "12.5px 25px 12.5px 25px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "70%" }}>
                <Typography
                  variant="subtitle2"
                  style={{
                    textAlign: "left",
                  }}
                >
                  Product Spreadsheets
                </Typography>
              </TableCell>

              <TableCell style={{ width: "30%" }}>
                <Typography variant="subtitle2">Review Document</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spreadsheets &&
              spreadsheets.map((spreadsheet) => (
                <TableRow key={spreadsheet.id}>
                  <TableCell>{spreadsheet.name}</TableCell>
                  <TableCell>
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
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  );
}

export default DetailsProductSpreadsheet;