import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import dropboxFileElementStyling from "./DropboxFileElementStyle";

// * STYLING 
const {
  listItemContainerStyling,
  fileTypeContainerStyling,
  fileTypeTextStyling,
} = dropboxFileElementStyling;

console.log('dropboxFileElementStyling is:', dropboxFileElementStyling );



// * DROPBOX FILE ELEMENT
export default function DropboxFileElement({file}) {

  console.log('pass file is:', file);

  const downloadFileButton = () => {
    console.log("download file: ---");
  };


  return (
    <>
      <ListItem className="list-item-container" sx={listItemContainerStyling}>
        <Box className="file-type-container" sx={fileTypeContainerStyling}>
          <Typography sx={fileTypeTextStyling}>XLSX</Typography>
        </Box>

        <ListItemText
          sx={{ p: "0 0 0 12px" }}
          primary="Name of file in Dropbox.xlsx"
          secondary={`Edited: Jan 9, 2014`}
        />

        <Box sx={{ padding: "0 6px 0 0" }}>
          <IconButton onClick={downloadFileButton} aria-label="delete">
            <FileDownloadOutlinedIcon />
          </IconButton>
        </Box>
      </ListItem>
    </>
  );
}
