import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AdminNavBar from "../NavBar/NavBar";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { Card, CardContent, Typography } from "@mui/material";

import VendorDetails from "../VendorDetails/VendorDetails";

import "./VendorsList.css";

export const ONBOARDING_STAGE_ICONS = {
  "Intake Form Submitted": (
    <Icon icon="mdi:clipboard-arrow-up" style={{ fontSize: "24px" }} />
  ),
  "Approved Intake Form": (
    <Icon
      icon="mdi:clipboard-check-multiple-outline"
      style={{ fontSize: "24px" }}
    />
  ),
  "Sent Contract": (
    <Icon
      icon="fluent:document-arrow-right-24-regular"
      style={{ fontSize: "24px" }}
    />
  ),
  "Contract Submitted": (
    <Icon
      icon="fluent:document-arrow-right-24-regular"
      style={{ fontSize: "24px" }}
    />
  ),
  "Sent Product Spreadsheet": (
    <Icon
      icon="fluent:document-table-cube-20-regular"
      style={{ fontSize: "24px" }}
    />
  ),
  "Product Spreadsheet Submitted": (
    <Icon icon="fluent:box-arrow-up-20-filled" style={{ fontSize: "24px" }} />
  ),
  "Approved Product": (
    <Icon icon="fluent:box-checkmark-20-regular" style={{ fontSize: "24px" }} />
  ),
  "Denied Application": (
    <Icon icon="octicon:x-circle-fill-16" style={{ fontSize: "20px" }} />
  ),
  "Onboarding Complete": (
    <Icon
      icon="material-symbols:heart-check-outline"
      style={{ fontSize: "24px" }}
    />
  ),
  "Paused Onboarding": (
    <Icon icon="fa6-solid:circle-pause" style={{ fontSize: "20px" }} />
  ),
};


function VendorsList() {
  const apiRef = useGridApiRef();
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const vendors = useSelector((store) => store.admin.vendors);

  useEffect(() => {
    dispatch({ type: "FETCH_VENDORS_REQUEST" });
  }, [dispatch]);

  const handleVendorClick = (vendor) => {
    setSelectedVendor(vendor);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCheck = (row) => {
    const newOnboardingStage = getNewOnboardingStage(row.onboarding_stage);
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: row.id, newOnboardingStage },
    });
    handleCloseModal();
  };

  const getNewOnboardingStage = (currentStage) => {
    const onboardingStages = [
      "Intake Form Submitted",
      "Approved Intake Form",
      "Sent Contract",
      "Contract Submitted",
      "Sent Product Spreadsheet",
      "Product Spreadsheet Submitted",
      "Approved Product",
      "Onboarding Complete",
      "Paused Onboarding",
      "Denied Application",
    ];
    const currentIndex = onboardingStages.indexOf(currentStage);
    return onboardingStages[currentIndex + 1];
  };

  const handleX = (row) => {
    const deniedApplicationStage = "Denied Application";
    dispatch({
      type: "UPDATE_ONBOARDING_STAGE",
      payload: { id: row.id, newOnboardingStage: deniedApplicationStage },
    });
    handleCloseModal();
  };

  const handleDelete = (row) => {
    // TODO: Implement the functionality to delete the vendor and archive their documents
  };

  const columns = [
    {
      field: "brand_name",
      headerName: "Vendor",
      flex: 1,
      renderCell: (params) => (
        <span
          onClick={() => handleVendorClick(params.row)}
          style={{ color: "#286264", cursor: "pointer", fontWeight: "bold" }}
        >
          {params.value}
        </span>
      ),
    },

    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "onboarding_stage",
      headerName: "Onboarding Stage",
      flex: 2,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {ONBOARDING_STAGE_ICONS[params.value]}
          <div style={{ marginLeft: "8px" }}>{params.value}</div>
        </div>
      ),
    },
    { field: "sdg", headerName: "Sustainable Development Goals", flex: 2 },
    {
      field: "number_of_products",
      headerName: "Number of Products",
      flex: 1,
    },
    {
      field: "date_created",
      headerName: "Intake Date",
      flex: 1,
      renderCell: (params) => format(new Date(params.value), "MM/dd/yyyy"),
    },
    {
      field: "fastTrack",
      headerName: "Fast Track",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          <Icon
            icon="mdi:check-decagram"
            style={{ fontSize: "30px", color: "#286264" }}
            onClick={() => handleCheck(params.row)}
          ></Icon>
          <Icon
            icon="bxs:x-circle"
            style={{ fontSize: "30px", color: "#F21E1E" }}
            onClick={() => handleX(params.row)}
          ></Icon>
        </>
      ),
    },
    {
      field: "delete",
      // headerName: "Delete Vendor",
      headerName: "",
      align: "center",
      flex: 0.5,
      renderCell: (params) => (
        <Icon
          icon="mingcute:delete-fill"
          style={{ fontSize: "30px", color: "#823646" }}
          onClick={() => handleDelete(params.row)}
        ></Icon>
      ),
    },
  ];

  if (!vendors) {
    return null; 
  }

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
            List of Vendors
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Track individual vendors and their onboarding status. Click on a
            vendor's name to view detailed information.
          </Typography>
        </CardContent>
        <DataGrid
          rows={vendors}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          apiRef={apiRef}
        />
        {selectedVendor && (
          <VendorDetails
            open={openModal}
            vendorId={selectedVendor ? selectedVendor.id : null}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}

export default VendorsList;
