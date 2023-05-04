import { useState } from "react";
import { Outlet } from "react-router-dom";

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

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

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
    <>
      <AppBar elevation={0} position="sticky">
        <Toolbar className="navContent" variant="dense">
          <Box className="logo-life" />

          <Box className="menuContent">
            <Box>
              <Link to={"/home"}>
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Inicio
                </Button>
              </Link>
            </Box>

            <Box>
              <Link to={"/home"}>
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Categorías
                </Button>
              </Link>
            </Box>

            <Box>
              <Link to={"/home"}>
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Manuales
                </Button>
              </Link>
            </Box>

            <Box>
              <Link to={"/home"}>
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Home
                </Button>
              </Link>
            </Box>

            <Box>
              <Link to={"/home"}>
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Contacto
                </Button>
              </Link>
            </Box>
          </Box>

          <Box className="buy-profile">
            <Box>
              <Link to={"/home"} className="buyMenu">
                <ShoppingCartIcon sx={{ color: "black" }} />
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Cesta
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={"/home"} className="profileMenu">
                <PersonIcon
                  sx={{ color: "black", width: "24px", height: "24px" }}
                />
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Mi cuenta
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet/>

      <Box
        sx={{
          backgroundColor: "black",
          height: "50px",
          position: "fixed",
          bottom: 0,
          width: "100vw"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "50px",
          }}
        >
          <Typography className="footer-text">
            Política de privacidad
          </Typography>
          <Typography className="footer-text">Aviso legal</Typography>
          <Typography className="footer-text">Política de cookies</Typography>
          <Typography className="footer-text">Copyright © 2023</Typography>
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
