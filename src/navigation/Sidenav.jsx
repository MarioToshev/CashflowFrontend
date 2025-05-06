import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Button, colors } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { blue, deepPurple, purple } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  margin: 15,
  fontFamily: "DM Sans",
}));

export default function Sidenav() {
  const theme = useTheme();
  const open = true;
  const iconStyle = { color: deepPurple[500], fontSize: 35 };

  const userPagesAndPaths = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <DashboardIcon sx={iconStyle} />,
    },
    {
      name: "Stock Page",
      link: "/stocks:stock",
      icon: <AssessmentIcon sx={iconStyle} />,
    },
    {
      name: "Log in",
      link: "/login",
      icon: <PersonIcon sx={iconStyle} />,
    },
    {
      name: "Register",
      link: "/register",
      icon: <PersonIcon sx={iconStyle} />,
    },
  ];
  const icons = [
    <DashboardIcon sx={iconStyle} />,
    <AssessmentIcon sx={iconStyle} />,
    <PersonIcon sx={iconStyle} />,
    <SettingsIcon sx={iconStyle} />,
  ];

  return (
    <Box sx={{ display: "flex", fontPalette: "dark" }}>
      <CssBaseline />
      <MuiDrawer component="nav" variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" fontFamily="Segoe UI">
            <b>HORIZON CAPITAL</b>
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <Box>
            {userPagesAndPaths.map((value) => (
              <NavLink to={value.link} style={{ textDecoration: "none" }}>
                <ListItem
                  key={value.name}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton>
                    <ListItemIcon>{value.icon}</ListItemIcon>
                    <b>
                      <ListItemText
                        primary={value.name}
                        sx={{
                          color: "black",
                          fontSize: 35,
                          ":hover": { color: deepPurple[500] },
                        }}
                      />
                    </b>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </Box>
        </List>
      </MuiDrawer>
    </Box>
  );
}
