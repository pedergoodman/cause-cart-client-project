import { Box, Button, List } from "@mui/material";
import React, { useEffect } from "react";
import DropboxFileElement from "../DropboxFileElement/DropboxFileElement";
import { useDispatch, useSelector } from "react-redux";



export default function DropboxFileContainer() {
  const dispatch = useDispatch();

  const dropboxVendorFiles = useSelector(
    (state) => state.dropboxVendorFiles
  );

console.log('dropboxVendorFiles are:', dropboxVendorFiles);




  useEffect(() => {
    dispatch({ type: "FETCH_VENDOR_DROPBOX_FILES" });
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="20px 25px 20px 25px"
      alignItems="center"
    >
      <Button
        variant="contained"
        href="https://www.dropbox.com"
        target="_blank"
      >
        View all files on Dropbox
      </Button>

      <List
        dense
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          mt: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "20px",
          alignItems: "stretch",
        }}
      >
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
      </List>
    </Box>
  );
}
