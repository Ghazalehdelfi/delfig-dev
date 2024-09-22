import { Box, Typography } from "@mui/material";
import colors from "../assets/colors";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      name: "AI storytime",
      description:
        "Create full storybooks using AI! I have utilized ChatGPT and DallE to create entire storybooks at the click of a button.",
      route: "/projects/storytime",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        paddingTop: "100px",
        height: "calc(90vh - 100px)",
        position: "relative",
      }}
    >
      {projects.map((project, index) => {
        return (
          <Box
            sx={{
              border: "1px solid",
              borderRadius: "10px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingInline: "30px",
              marginBottom: "20px",

              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
              color: colors.darkShade,
              "&:hover": {
                backgroundColor: colors.lightAccent,
                cursor: "pointer",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(project.route);
            }}
          >
            <Typography variant="h3" sx={{ display: "inline" }}>
              {project.name}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {project.description}
            </Typography>
          </Box>
        );
      })}
      <Box sx={{ position: "absolute", bottom: "100px", right: "5vw" }}>
        More projects coming soon!
      </Box>
    </Box>
  );
};

export default Projects;
