import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import colors from "../assets/colors";
import { CVdownload } from "../utils";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { label: "HOME", route: "/" },
          { label: "PROJECTS", route: "/projects" },
          { label: "CV", route: "" },
          { label: "ABOUT", route: "/about" },
        ].map((option) => (
          <ListItem key={option.label} disablePadding>
            <ListItemButton
              onClick={() => {
                option.label === "CV" ? CVdownload() : navigate(option.route);
              }}
            >
              <ListItemText primary={option.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        marginLeft: "4vw",
        marginTop: "2vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{ backgroundColor: colors.lightAccent }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ fill: colors.darkShade }} />
      </IconButton>
      <Typography
        sx={{
          letterSpacing: ".5vw",
          fontWeight: "700",
          fontSize: "1.5rem",
          marginLeft: "30px",
          color: colors.darkShade,
        }}
      >
        GHAZALEH.
      </Typography>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Box>
  );
};

export default MobileNavbar;
