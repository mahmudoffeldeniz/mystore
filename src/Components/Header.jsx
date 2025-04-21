import React, { useState } from "react";
import "../assets/Header.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useScrollTrigger,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

// ElevationScroll wraps the AppBar to add scroll-triggered effects
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return React.cloneElement(children, {
    style: {
      top: trigger ? "0" : "40px",
      boxShadow: trigger ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
      transition: "top 0.3s ease, box-shadow 0.3s ease",
      position: "fixed",
      width: "calc(100% - 2px)",
      marginLeft: "1px",
      marginRight: "1px",
      zIndex: 1300,
    },
  });
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerItemClick = () => {
    setMobileOpen(false);
  };

  const mobileNavLinkStyle = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    padding: "8px 16px",
  };

  const drawer = (
    <Box sx={{ width: 240 }}>
      <Box sx={{ mt: 5 }} role="presentation">
        <List>
          {pages.map((page) => (
            <ListItem button key={page.label} onClick={handleDrawerItemClick}>
              <NavLink to={page.path} style={mobileNavLinkStyle}>
                <ListItemText primary={page.label} />
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Bar */}
      <Box
        className="Top-header"
        sx={{
          position: "fixed",
          top: trigger ? "-40px" : "0",
          left: 0,
          right: 0,
          height: "40px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          transition: "top 0.3s ease",
          zIndex: 1400,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CiLocationOn />
            <span className="top-information">Logaction</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <TfiEmail fontSize="small" />
            <span className="top-information">email@example.com</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BsTelephone fontSize="small" />
            <span className="top-information">+1 995 0023 03</span>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: "black" }}>
            <FiFacebook fontSize="large" />
          </IconButton>
          <IconButton size="small" sx={{ color: "black" }}>
            <FaXTwitter fontSize="large" />
          </IconButton>
          <IconButton size="small" sx={{ color: "black" }}>
            <FaInstagram fontSize="large" />
          </IconButton>
          <IconButton size="small" sx={{ color: "black" }}>
            <FaLinkedinIn fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Main Header */}
      <ElevationScroll>
        <AppBar
          className="Main-Header"
          position="fixed"
          elevation={0}
          style={{ backgroundColor: "#fff" }}
        >
          <div className="header-box">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  component={NavLink}
                  to="/"
                  className="logo-navlink logo"
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                >
                  <img
                    className="logo"
                    src="https://www.seekpng.com/png/full/429-4290324_website-development-company-in-delhi-ecommerce-website-logo.png"
                    alt="Logo"
                  />
                </Button>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    component={NavLink}
                    to={page.path}
                    className="navlink"
                    activeClassName="active"
                    sx={{
                      color: "black",
                      mx: 1,
                      textTransform: "none",
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  aria-label="search"
                  sx={{
                    color: "black",
                    border: "1px solid #f3f3f3",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{ color: "black", zIndex: 1500 }}
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Toolbar>
          </div>
        </AppBar>
      </ElevationScroll>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            height: 550,
            marginTop: 16,
            right: 5,
            borderRadius: 8,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar sx={{ minHeight: trigger ? "0px" : "40px" }} />
      <Toolbar />
    </>
  );
};

export default Header;
