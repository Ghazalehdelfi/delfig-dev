import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import { CVdownload } from "../utils";

import colors from "../assets/colors";

const Navbar = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const location = window.location.pathname;

  const options = [
    { label: "HOME", path: "/" },
    { label: "PROJECTS", path: "/projects" },
    { label: "CV", path: "" },
    { label: "ABOUT", path: "/about" },
  ];

  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  });

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0",
        display: "flex",
        flexDirection: "row",
        backgroundColor: hasScroll ? colors.lightAccent : colors.lightShade,
        width: "89.5vw",
        height: "10vh",
        alignItems: "center",
        paddingInline: "5vw",
        zIndex: "1",
      }}
    >
      <Typography
        sx={{
          color: hasScroll ? colors.lightShade : colors.darkShade,
          letterSpacing: ".5vw",
          fontWeight: "700",
          fontSize: "1.5rem",
        }}
      >
        GHAZALEH.
      </Typography>
      <Box sx={{ marginLeft: "auto", display: "flex", gap: "1vw" }}>
        {options.map((option, index) => {
          const isSelected = location === option.path;
          return (
            <Button
              key={index}
              sx={{
                textDecoration: `${isSelected ? "underline" : "none"}`,
                textAlign: "center",
                letterSpacing: ".5vw",
                color: hasScroll ? colors.lightShade : colors.darkShade,
                fontWeight: "700",
                "&:hover": {
                  textDecoration: `${isSelected ? "underline" : "none"}`,
                },
              }}
              onClick={() => {
                if (option.label === "CV") {
                  CVdownload();
                } else navigate(option.path);
              }}
            >
              {option.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
