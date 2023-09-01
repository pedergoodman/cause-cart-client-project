import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import { Icon } from '@iconify/react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Vendors List', route: '/vendors-list' },
  { name: 'Templates', route: '/templates' },
];

function AdminNavBar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      {/* If no user is logged in, show these links */}
      {!user.id && (
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
          }}
        >
          <Link
            to="/registration"
            style={{
              fontFamily: 'Roboto, sans-serif',
              textDecoration: 'none',
              color: '#000000',
              marginLeft: '16px',
            }}
          >
            <Typography variant="body1">Register/Login</Typography>
          </Link>
        </Box>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <>
          <AppBar position="static" style={{ backgroundColor: '#dcebeb' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <IconButton
                  edge="start"
                  color="#286264"
                  aria-label="menu"
                  onClick={handleOpenNavMenu}
                  sx={{ display: { xs: 'flex', sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'flex' },
                    alignItems: 'center',
                  }}
                >
                  {pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.route}
                      style={{
                        fontFamily: 'Roboto, sans-serif',
                        textDecoration: 'none',
                        color: '#000000',
                        marginLeft: '16px',
                      }}
                    >
                      <Typography variant="body1">{page.name}</Typography>
                    </Link>
                  ))}
                  <Typography
                    variant="body1"
                    style={{ marginLeft: '16px', cursor: 'pointer' }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Typography>
                </Box>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', sm: 'none' } }}
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
        </>
      )}
    </>
  );
}

export default AdminNavBar;
