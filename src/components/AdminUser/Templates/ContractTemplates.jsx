import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

function ContractTemplates() {
  const vendors = useSelector((store) => store.admin.vendors);

  // ** WED 8/30/2023: THE FOLLOWING TODOs MAY CHANGE - DEPENDING ON DROPBOX API/TIMING **
  const handleDelete = (row) => {
    // TODO: Implement the functionality to delete the template from Dropbox API
  };

  const handlePreview = (row) => {
    // TODO: Implement the functionality to preview the document
  };

  const handleDownload = (row) => {
    // TODO: Implement the functionality to download the document
  };

  const handleReplace = (row) => {
    // TODO: Implement the functionality to replace the file
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contracts</TableCell>
            <TableCell align="right">View Document</TableCell>
            <TableCell align="right">Last Updated</TableCell>
            <TableCell align="right">Fast Track</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendors.map((vendor) => (
            <TableRow
              key={vendor.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {vendor.contracts}
              </TableCell>
              <TableCell align="right">
                <Button variant="outlined">View</Button>
              </TableCell>
              <TableCell align="right">
                {vendor.last_updated
                  ? format(new Date(vendor.last_updated), "MM/dd/yyyy")
                  : "N/A"}
              </TableCell>

              <TableCell align="right">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="upload picture"
                  component="span"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContractTemplates;
