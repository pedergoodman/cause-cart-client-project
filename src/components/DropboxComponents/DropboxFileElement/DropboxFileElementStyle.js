// * STYLING for DropboxFileElement

const listItemContainerStyling = {
  border: "1px solid #ccc",
  boxShadow: "0 0 2px 0px rgba(0,0,0,0.3)",
  p: "0 0 0 0",
  borderRadius: "4px",
  fontWeight: "bold",
};

const fileTypeContainerStyling = {
  backgroundColor: "#F9BC9E",
  width: "fit-content",
  minWidth: "11%",
  padding: "0px 6px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const fileTypeTextStyling = {
  textAlign: "center",
  verticalAlign: "middle",
  display: "table-cell",
  fontWeight: "bold",
};

// combine styling to import to DropboxFileElement
const dropboxFileElementStyling = {
  listItemContainerStyling,
  fileTypeContainerStyling,
  fileTypeTextStyling,
}


export default dropboxFileElementStyling;