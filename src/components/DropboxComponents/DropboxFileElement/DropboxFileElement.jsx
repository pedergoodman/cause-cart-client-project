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
  const filePath = file.path_lower;
  // format date
  const fileModified = new Date(file.client_modified).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  // console.log("fileName is:", fileName);
  // console.log("fileType is:", fileType);
  // console.log("filePath is:", filePath);
  // console.log("fileModified is:", fileModified);
  // console.log("file is:", file);

  const downloadFileButton = () => {
    console.log("download file path:", filePath);
    console.log("download disabled at the moment");
    // dispatch({
    //   type: "DOWNLOAD_DROPBOX_FILE",
    //   payload: filePath,
    // });
  };
  
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
          {/* <IconButton onClick={downloadFileButton} aria-label="download">
            <FileDownloadOutlinedIcon />
          </IconButton> */}
        </Box>
      </ListItem>
    </>
  );
}
