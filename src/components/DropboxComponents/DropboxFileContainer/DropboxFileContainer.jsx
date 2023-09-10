import { Box, Button, LinearProgress, List } from "@mui/material";
import React, { useEffect } from "react";
import DropboxFileElement from "../DropboxFileElement/DropboxFileElement";
import { useDispatch, useSelector } from "react-redux";
import dropboxFileElementStyling from "../DropboxFileElement/DropboxFileElementStyle";

// DROPBOX FILE CONTAINER
export default function DropboxFileContainer({
  dropboxFolderPath,
  dropboxSharedLink,
}) {
  const dispatch = useDispatch();

  console.log("in container, passed dropboxSharedLink are:", dropboxSharedLink);

  // fetch data on files inside specific dropbox folder
  // and save in the store.
  useEffect(() => {
    dispatch({
      type: "FETCH_VENDOR_DROPBOX_FILES",
      payload: dropboxFolderPath,
    });
  }, []);

  // grab dropbox files data from store
  const dropboxVendorFiles = useSelector(store => store.dropboxVendorFiles);
  const dropboxLoadingSpinner = useSelector(
    store => store.errors.dropboxLoadingSpinner
  );
  const dropboxFiles = dropboxVendorFiles.data;

  console.log("dropboxLoadingSpinner is:", dropboxLoadingSpinner);

  const ListOfDropboxFiles = () => {
    return (
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
          <DropboxFileElement key={file.id} file={file} />
        ))}
      </List>
    );
  };

  const DropboxLoadingBar = () => {
    return (
      <Box sx={{ width: "60%" }}>
        <LinearProgress
          sx={{
            // color: "#F9BC9E",
            backgroundColor: "#FFE6D9",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#f3aaa5",
            },
          }}
        />
      </Box>
    );
  };

  
  // ** RENDERING
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="0px 25px 20px 25px"
      alignItems="center"
    >
      {dropboxLoadingSpinner ? <DropboxLoadingBar /> : <ListOfDropboxFiles />}
    </Box>
  );
}
