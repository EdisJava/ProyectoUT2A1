import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import { authActions } from '../store/authSlice';

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.authenticator);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!userData.isAutenticated) {
      navigate('/');
    }
  }, [userData.isAutenticated, navigate]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Informes" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding onClick={handleLogout}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gestión de Colección
          </Typography>
          {userData.isAutenticated && (
            <Typography variant="body1" sx={{ mr: 2 }}>
              {userData.userName} ({userData.userRol})
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Menu;