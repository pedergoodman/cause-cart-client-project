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
import MenuIcon from "@mui/icons-material/Menu";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import AdminNavBar from "../AdminUser/AdminNavBar/AdminNavBar";
import VendorNavBar from "../VendorUser/VendorNavBar/VendorNavBar";

const pages = [
  { name: "Home", route: "/home" },
  { name: "About", route: "/about" },
];

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* If no user is logged in, show these links */}
      {!user.id ? (
        // If there's no user, show login/registration links
        <AppBar position="static" style={{ backgroundColor: "#d8e5e9" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton
                edge="start"
                color="#367f9c"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ color:"#367f9c", display: { xs: "flex", sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/home">
                <IconButton
                  sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
                  style={{ color: "#367f9c" }}
                >
                  <Icon
                    icon="material-symbols:partner-exchange-rounded"
                    color="#367f9c"
                    width="40"
                    height="40"
                  />
                </IconButton>
              </Link>
              <Link to="/home">
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <img
                    src="images/noUserNavBarCCLogo.png"
                    alt="Logo"
                    style={{ height: "40px" }}
                  />
                </Box>
              </Link>

              <Box sx={{ flexGrow: 1 }} />

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
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      ) : // If a user group is logged-in,
      // show AdminNavBar or VendorNavBar based on user's authorization_level
      user.authorization_level === 1 ? (
        <AdminNavBar />
      ) : (
        <VendorNavBar />
      )}
    </>
  );
}

export default Nav;
