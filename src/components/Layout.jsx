import { Box } from "@mui/material";
import Navbar from "./Navbar";
import colors from "../assets/colors";
import MobileNavbar from "./MobileNavbar";
import { useWindowWidth } from "../utils";

const Layout = (props) => {
  const width = useWindowWidth();
  return (
    <Box
      sx={{
        backgroundColor: colors.lightShade,
        width: "100vw",
        maxWidth: "99.5vw",
        minHeight: "100vh",
      }}
    >
      {width > 600 ? <Navbar /> : <MobileNavbar />}
      <Box
        sx={{
          height: "100%",
          minHeight: "90vh",
          paddingInline: "5vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
