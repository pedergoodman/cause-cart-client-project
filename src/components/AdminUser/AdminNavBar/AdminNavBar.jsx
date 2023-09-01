import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Icon } from "@iconify/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [
  { name: "Vendors List", route: "/vendors-list" },
  { name: "Templates", route: "/templates" },
];

function AdminNavBar() {
  const dispatch = useDispatch();
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
    <AppBar position="static" style={{ backgroundColor: "#dcebeb" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="#286264"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/vendors-list">
            <IconButton
              sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
              style={{ color: "#286264" }}
            >
              <Icon icon="mdi:table-heart" height="40px" />
            </IconButton>
          </Link>
          <Link to="/vendors-list">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <img
                src="images/navBarCCLogo.png"
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
          >
            <Link
              to="/templates"
              style={{
                fontFamily: "Roboto, sans-serif",
                textDecoration: "none",
                color: "#286264",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon icon="fluent-mdl2:file-template" height="28px" />
              <Typography variant="body1" sx={{ ml: 1 }}>
                Templates
              </Typography>
            </Link>
            <div
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
            </div>
          </Box>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AdminNavBar;
