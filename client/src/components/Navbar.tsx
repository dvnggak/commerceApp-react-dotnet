import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "semibold" }}
          >
            E-Commerce Project
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
