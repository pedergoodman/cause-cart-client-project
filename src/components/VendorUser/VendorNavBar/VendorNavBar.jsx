import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const pages = [{ name: "Home", route: "/home" }];

function VendorNavBar() {
  const dispatch = useDispatch();
  // Set anchorElNav to null and then update it to the correct HTML element/NavBar based on userGroup.
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#ffcfb9" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: "#fa8a5c", display: { xs: "flex", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/vendorstepper">
              <IconButton sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}>
                <Icon
                  icon="material-symbols:partner-exchange-rounded"
                  color="#fa8a5c"
                  width="40"
                  height="40"
                />
              </IconButton>
            </Link>
            <Link to="/vendorstepper">
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <img
                  src="images/vendorNavBarCCLogo.png"
                  alt="Logo"
                  style={{ height: "40px" }}
                />
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
              }}
              onClick={() => {
                handleLogout();
              }}
              style={{
                fontFamily: "Roboto, sans-serif",
                textDecoration: "none",
                color: "#000000",
                marginLeft: "16px",
                cursor: "pointer",
              }}
            >
              <Typography variant="body1">Logout</Typography>
            </Box>
            {/* Menu component will only be rendered when anchorElNav is a valid HTML element. */}
            {anchorElNav && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={page.route}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  key="Logout"
                  onClick={() => {
                    handleCloseNavMenu();
                    handleLogout();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            )}{" "}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default VendorNavBar;
