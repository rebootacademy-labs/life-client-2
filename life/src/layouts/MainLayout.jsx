import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";

import { Box } from "@mui/system";

function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  function openMenu(event) {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setAnchorEl(null);
    setIsMenuOpen(false);
  }

  function onLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <AppBar elevation={0}>
      <Toolbar className="navContent" variant="dense" >
        <Box className="logo-life"/>

        <Box className= "menuContent">
          <Box>
            <Link to={"/home"}>
              <Button sx={{ color: "black", fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
          </Box>

          <Box>
            <Link to={"/home"}>
            <Button sx={{ color: "black", fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
          </Box>

          <Box>
            <Link to={"/home"}>
              <Button sx={{ color: "black", fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
          </Box>

          <Box>
            <Link to={"/home"}>
              <Button sx={{ color: "black", fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
          </Box>

          <Box>
            <Link to={"/home"}>
              <Button sx={{ color: "black", fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
          </Box>

        </Box>

        <Box className="buy-profile">
        <Box >
          <Box>
            <Link to={"/home"}>
              <ShoppingCartIcon/>
              <Button sx={{ color: "black", fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
          </Box>
          </Box>
          <Box>
            <Link to={"/home"}>
              <Button sx={{ color: "black", fontWeight: "bold"}}>
                Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MainLayout;
