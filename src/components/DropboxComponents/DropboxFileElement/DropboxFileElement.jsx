import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, IconButton, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import dropboxFileElementStyling from "./DropboxFileElementStyle";
import { useDispatch } from "react-redux";

// * STYLING
const {
  listItemContainerStyling,
  fileTypeContainerStyling,
  fileTypeTextStyling,
} = dropboxFileElementStyling;

console.log("dropboxFileElementStyling is:", dropboxFileElementStyling);

// * DROPBOX FILE ELEMENT
export default function DropboxFileElement({ file }) {
  const dispatch = useDispatch();

  // file info
  const fileName = file.name.split(".").shift();
  const fileType = file.name.split(".").pop().toUpperCase();
  const sharedFileLink = file?.url.replace("&dl=0","&dl=1")

  // console.log(sharedFileLink);

  // format date
  const fileModified = new Date(file.client_modified).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );


  return (
    <>
      <ListItem className="list-item-container" sx={listItemContainerStyling}>
        <Box className="file-type-container" sx={fileTypeContainerStyling}>
          <Typography sx={fileTypeTextStyling}>{fileType}</Typography>
        </Box>

        <ListItemText
          sx={{ p: "0 0 0 12px" }}
          primary={fileName}
          secondary={`Edited: ${fileModified}`}
        />

        <Box sx={{ padding: "0 6px 0 0" }}>
          <IconButton 
          href={sharedFileLink}
          aria-label="download"
          target="_blank"
          >
            
            <FileDownloadOutlinedIcon />
          </IconButton>
        </Box>
      </ListItem>
    </>
  );
}
