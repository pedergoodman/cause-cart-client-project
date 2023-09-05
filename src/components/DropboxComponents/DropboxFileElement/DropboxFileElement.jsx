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

const downloadFile = () => {
  console.log("download file: ---");
};

export default function FolderList() {
  return (
    <>
      <ListItem
        sx={{
          border: "1px solid #ccc",
          boxShadow: "0 0 2px 0px rgba(0,0,0,0.3)",
          p: "0 0 0 0",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F9BC9E",
            width: "fit-content",
            minWidth: "11%",
            padding: "0px 6px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              display: "table-cell",
              fontWeight: "bold",
            }}
          >
            XLSX
          </Typography>
        </Box>

        <ListItemText
          sx={{ p: "0 0 0 12px" }}
          primary="Name of file in Dropbox.xlsx"
          secondary={`Edited: Jan 9, 2014`}
        />

        <Box sx={{ padding: "0 6px 0 0" }}>
          <IconButton onClick={downloadFile} aria-label="delete">
            <FileDownloadOutlinedIcon />
          </IconButton>
        </Box>
      </ListItem>
    </>
  );
}
