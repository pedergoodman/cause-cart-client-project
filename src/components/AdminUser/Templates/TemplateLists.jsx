import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavBar from "../NavBar/NavBar";
import { CardContent, Typography, Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ContractTemplates from './ContractTemplates';
import ProductSpreadsheetTemplates from './ProductSpreadsheetTemplates';

function TemplateLists() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AdminNavBar />
      <div style={{ height: "100%", width: "100%" }}>
        <CardContent sx={{ paddingTop: "32px", paddingBottom: "32px" }}>
          <Typography
            variant="h5"
            component="div"
            color="#000000"
            fontSize="32px"
            fontStyle="normal"
            fontWeight="400"
          >
            Templates
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Replace outdated product spreadsheets and contracts by uploading the
            latest file. Add a spreadsheet for a new product.
          </Typography>
        </CardContent>
        {/* <ContractTemplates /> */}
        <ProductSpreadsheetTemplates />
        <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: '16px', right: '16px' }} onClick={handleOpen}>
          <AddIcon />
        </Fab>
        <Dialog open={openModal} onClose={handleClose}>
          <DialogTitle>Upload New Product Spreadsheet</DialogTitle>
          <DialogContent>
            {/* TODO: Add form for file upload */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Upload
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default TemplateLists;
