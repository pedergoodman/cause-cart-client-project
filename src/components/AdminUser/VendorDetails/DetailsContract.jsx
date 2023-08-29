import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import {
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
  marginBottom: "32px",
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
});

const ContractRequirementsMetCell = styled(TableCell)({
  display: "table-cell",
  textAlign: "center",
  verticalAlign: "middle",
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

  const handleContractApprove = (contract) => {
    // TODO: Implement the functionality to approve the contract
  };

  const handleContractDeny = (contract) => {
    // TODO: Implement the functionality to deny the contract
  };

  return (
    <ThemeProvider theme={theme}>
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
            <TableCell>
              <Typography variant="subtitle2">Requirements Met</Typography>
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
                <ContractRequirementsMetCell>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={contract.approved}
                  >
                    <CheckIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={contract.approved}
                  >
                    <CloseIcon />
                  </Button>
                </ContractRequirementsMetCell>
              </TableRow>
            ))}
        </TableBody>
      </DetailsContractTable>
    </ThemeProvider>
  );
}

export default DetailsContract;
