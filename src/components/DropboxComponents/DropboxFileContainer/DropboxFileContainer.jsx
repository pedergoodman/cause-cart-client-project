import { Box, Button, List } from "@mui/material";
import React, { useEffect } from "react";
import DropboxFileElement from "../DropboxFileElement/DropboxFileElement";
import { useDispatch, useSelector } from "react-redux";

// DROPBOX FILE CONTAINER
export default function DropboxFileContainer({ dropboxFolderPath }) {
  const dispatch = useDispatch();

  // fetch data on files inside specific dropbox folder
  // and save in the store.
  useEffect(() => {
    dispatch({
      type: "FETCH_VENDOR_DROPBOX_FILES",
      payload: dropboxFolderPath,
    });
  }, []);

  // grab dropbox files data from store
  const dropboxVendorFiles = useSelector(state => state.dropboxVendorFiles);

  const dropboxFiles = dropboxVendorFiles.data;

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
        {dropboxFiles?.map(file => (
          <DropboxFileElement 
          key={file.id}
          file={file} 
          />
        ))}

        {/* TEST display */}
        {/* 
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement />
        <DropboxFileElement /> */}
      </List>
    </Box>
  );
}
