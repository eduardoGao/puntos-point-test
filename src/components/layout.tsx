import React from "react";
import { Navbar } from "./navbar";
import { Box } from "@mui/material";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Box minHeight="100vh" p={2}>
        {children}
      </Box>
    </div>
  );
};
