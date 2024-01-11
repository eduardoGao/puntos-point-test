import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const router = useRouter();

  const routes = [
    { label: "Dashboard", path: "/" },
    { label: "Clientes", path: "/clients" },
    { label: "Reglas de Acumulación", path: "/rules" },
  ];

  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <Grid
      padding={2}
      sx={{ boxShadow: 1, position: "relative" }}
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box component={"nav"}>
        {routes.map((route, idx) => (
          <Button
            key={idx}
            id="dashboard"
            name="dashboard"
            variant={router.pathname === route.path ? "contained" : "text"}
            sx={{ borderRadius: "1rem", textTransform: "capitalize" }}
            onClick={() => router.push(route.path)}
          >
            {route.label}
          </Button>
        ))}
      </Box>
      {isDesktop && <ProfileMenu />}
    </Grid>
  );
};

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid
      sx={{ position: "absolute", right: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleClick}
      >
        Profile
      </Button>
    </Grid>
  );
};
