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
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@iconify/react";

const DetailsContractTable = styled(Table)({
//   marginBottom: "32px",
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

const ContractReviewDocumentCell = styled(TableCell)({
  display: "table-cell",
  textAlign: "center",
  verticalAlign: "middle",
  width: "200px", // specify the width
});



function DetailsContract({ contracts }) {
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);

  const handleContractPreview = (contract) => {
    setSelectedContract(contract);
    setOpen(true);
  };

  const handleContractDownload = (contract) => {
    setSelectedContract(contract);
    setDownload(true);
  };

  const handleContractClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: "800px", padding: "12.5px 25px 25px 25px" }}>
        <DetailsContractTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="subtitle2"
                  style={{
                    textAlign: "left",
                  }}
                >
                  Contract{" "}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">Review Document</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts &&
              contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.name}</TableCell>
                  <ContractReviewDocumentCell>
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
                        onClick={() => handleContractPreview(contract)}
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
                        onClick={() => handleContractDownload(contract)}
                      >
                        Download
                      </Button>
                    </div>
                  </ContractReviewDocumentCell>
                </TableRow>
              ))}
          </TableBody>
        </DetailsContractTable>
      </Box>
    </ThemeProvider>
  );
}

export default DetailsContract;
