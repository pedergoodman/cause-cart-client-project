import React, { useState, useMemo } from "react";
import {
  DataGrid,
  useGridApiRef,
} from "@mui/x-data-grid";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-cell': {
      backgroundColor: '#FFF9F5',
    },
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: '#F9BC9E',
    },
    '& .MuiDataGrid-root .MuiDataGrid-columnHeader, .MuiDataGrid-columnHeaders': {
      backgroundColor: '#F9BC9E',
    },
  });

  const primaryCategories = [
    "Home Decor",
    "Jewelry",
    "Kids Apparel",
    "Kids + Baby (non-Apparel)",
    "Men’s accessories",
    "Men’s Apparel",
    "Beauty + Wellness",
    "Pets",
    "Women’s accessories",
    "Women’s Apparel",
    "Other",
  ];

  const columns = [
      {
        field: "productName",
        headerName: "Product Name",
        flex: 2,
        editable: true,
      },
      {
        field: "primaryCategory",
        headerName: "Primary Category",
        flex: 2,
        editable: true,
      },
      {
        field: "lastUpdated",
        headerName: "Last Updated",
        type: "date",
        flex: 2,
        editable: true,
      },
      {
        field: "actions",
        headerName: "Actions",
        flex: 2,
        renderCell: (params) => (
          <>
            <Button variant="outlined">Preview</Button>
            <Button variant="outlined">Download</Button>
            <IconButton color="primary" aria-label="replace file" component="span">
              <AddIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="delete file" component="span">
              <DeleteIcon />
            </IconButton>
          </>
        ),
      },
    ];
const rows = [
    {
      id: 1,
      productName: "Earrings",
      primaryCategory: "Jewelry",
      lastUpdated: new Date(),
    },
    {
      id: 2,
      productName: "Necklace",
      primaryCategory: "Women’s accessories",
      lastUpdated: new Date(),
    },
    {
      id: 3,
      productName: "Bracelet",
      primaryCategory: "Jewelry",
      lastUpdated: new Date(),
    },
    {
      id: 4,
      productName: "Ring",
      primaryCategory: "Jewelry",
      lastUpdated: new Date(),
    },
    {
      id: 5,
      productName: "Watch",
      primaryCategory: "Men’s accessories",
      lastUpdated: new Date(),
    },
  ];

function ProductSpreadsheetTemplates() {
const [selectedCategories, setSelectedCategories] = useState([]);
const [anchorEl, setAnchorEl] = useState(null);
const apiRef = useGridApiRef();

const handleFilterIconClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

const handleCheckboxChange = (event) => {
  const { checked, name } = event.target;
  setSelectedCategories((prev) =>
    checked ? [...prev, name] : prev.filter((category) => category !== name)
  );
};

const filteredRows = useMemo(
  () =>
    rows.filter((row) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(row.primaryCategory)
    ),
  [selectedCategories]
);


  return (
    <div style={{ height: 400, width: "100%" }}>
      <Paper>
        <IconButton
          aria-label="filter list"
          onClick={handleFilterIconClick}
          color="primary"
        >
          <FilterListIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {primaryCategories.map((category) => (
            <MenuItem key={category}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onChange={handleCheckboxChange}
                    name={category}
                    color="primary"
                  />
                }
                label={category}
              />
            </MenuItem>
          ))}
        </Menu>
      </Paper>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <StyledDataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            apiRef={apiRef}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSpreadsheetTemplates;
