import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "white", padding: "10px" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Link to="/">Filter</Link>
        <Link to="/selection">Selection</Link>
      </Stack>
    </Box>
  );
};

export default Navbar;
