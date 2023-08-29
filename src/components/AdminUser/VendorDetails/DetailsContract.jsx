import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@iconify/react";

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
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Contract</TableCell>
            <TableCell>View Document</TableCell>
            <TableCell>Requirements Met</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts &&
            contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell>{contract.name}</TableCell>
                <TableCell>
                  <Icon
                    icon="material-symbols:preview"
                    style={{
                      fontSize: "30px",
                      color: "#75907b",
                      cursor: "pointer",
                    }}
                    onClick={() => handleContractPreview(contract)}
                  ></Icon>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      backgroundColor: "#EF6C00",
                      padding: "4px 10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => handleContractDownload(contract)}
                  >
                    Download
                  </Button>
                </TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DetailsContract;
