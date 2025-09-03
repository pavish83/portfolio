
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import AppThemeToggle from "./AppThemeToggle";
import appTheme from "../../styles/theme";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import { useThemeMode } from "../../context/ThemeContext";

const AppNavbar = () => {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;
  const themeMui = useTheme();
  const isMobile = useMediaQuery(themeMui.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();
  const selectedRoute = location.pathname;

  return (
    <AppBar
      position="static"
      sx={{
        width: "100vw",
        background: theme.colors.gradientBackground,
        color: theme.colors.textLight,
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
                width: "40px",
                height: "40px",
              }}
            >
              <Logo />
            </Box>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: theme.colors.textLight,
                display: { xs: "none", lg: "block" },
                mr: 2,
              }}
            >
              Pavel Vishnepolsky - Portfolio
            </Typography>
          </Box>
        ) : null}

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen("true")}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: theme.colors.gradientBackground,
                  color: theme.colors.textLight,
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: "none",
                  color: theme.colors.textLight,
                  padding: 2,
                }}
              >
                Pavel Vishnepolsky - Portfolio
              </Typography>
              <Box width={220}>
                <List>
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary="Home"
                      sx={{
                        color:
                          selectedRoute === "/"
                            ? theme.colors.primary
                            : theme.colors.textLight,
                        textAlign: "left",
                      }}
                    />
                  </ListItem>

                  <ListItem
                    button
                    component={Link}
                    to="/resume"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary="Resume"
                      sx={{
                        color:
                          selectedRoute === "/resume"
                            ? theme.colors.primary
                            : theme.colors.textLight,
                        textAlign: "left",
                      }}
                    />
                  </ListItem>

                  <ListItem
                    button
                    component={Link}
                    to="/projects"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary="Projects"
                      sx={{
                        color:
                          selectedRoute === "/projects"
                            ? theme.colors.primary
                            : theme.colors.textLight,
                        textAlign: "left",
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <>
              <Button
                component={Link}
                to="/"
                sx={{
                  color:
                    selectedRoute === "/"
                      ? theme.colors.primary
                      : theme.colors.textLight,
                  textTransform: "none",
                }}
              >
                Home
              </Button>

              <Button
                  component={Link}
                  to="/projects"
                  sx={{
                    color:
                      selectedRoute === "/projects"
                        ? theme.colors.primary
                        : theme.colors.textLight,
                    textTransform: "none",
                  }}
                >
                  Projects
                </Button>

              <>
                <Button
                  component={Link}
                  to="/resume"
                  sx={{
                    color:
                      selectedRoute === "/resume"
                        ? theme.colors.primary
                        : theme.colors.textLight,
                    textTransform: "none",
                  }}
                >
                  Resume
                </Button>
              </>
            </>
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AppThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
