import { Box, Tooltip, Typography } from "@mui/material";
import meImage from "../assets/me.jpeg";
import { useWindowWidth } from "../utils";
import colors from "../assets/colors";

const TechCard = ({ name, link, mobile = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "15px",
      }}
    >
      <Tooltip title={name}>
        <img src={link} width="50" alt={name} />
      </Tooltip>
    </Box>
  );
};

const About = () => {
  const width = useWindowWidth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: width > 600 ? "row" : "column",
        alignItems: "center",
      }}
    >
      {width > 600 ? (
        <>
          <Box sx={{ width: "60%" }}>
            <Typography
              sx={{ color: colors.darkAccent, marginBottom: "2vh" }}
              variant="h4"
            >
              About Me
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Hi! My name is Ghazaleh and I am a Software Engineer. I've had a
              winding path getting to Software, I started with my BSc in
              electrical engineering focusing on signal processing. From there I
              transitioned to biomedical engineering for my MASc, where I was
              employing Computer Vision to tackle biomechanical problems. After
              graduation I once more transitioned into software engineering. My
              diverse background helps me with a more wholesome understanding of
              all aspects of technical requirements, from problem definition to
              implementation. Currently, I'm interested in software engineering,
              artificial intelligence, machine learning and MLOps.
            </Typography>
            <Typography sx={{ marginTop: "3vh" }}>
              Here are some tools I have experience with:
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <TechCard
                name="JavaScript"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                mobile={false}
              />
              <TechCard
                name="TypeScript"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                mobile={false}
              />
              <TechCard
                name="React"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                mobile={false}
              />
              <TechCard
                name="HTML"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                mobile={false}
              />
              <TechCard
                name="CSS"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                mobile={false}
              />
              <TechCard
                name="Tailwind"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                mobile={false}
              />
              <TechCard
                name="NodeJS"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                mobile={false}
              />
              <TechCard
                name="ExpressJS"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                mobile={false}
              />
              <TechCard
                name="Python"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                mobile={false}
              />
              <TechCard
                name="AWS services"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                mobile={false}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", width: "40%" }}>
            <img src={meImage} alt="me" width="400" />
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "5vh" }}
          >
            <img src={meImage} alt="me" width="400" />
          </Box>
          <Box sx={{ marginTop: "5vh" }}>
            <Typography
              sx={{ color: colors.darkAccent, marginBottom: "2vh" }}
              variant="h4"
            >
              About Me
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Hi! My name is Ghazaleh and I am a Software Engineer, with my
              focus on front-end. I've had a winding path getting to Software,
              started from electrical engineering focusing on signal processing.
              From there I transitioned to biomedical engineering for my MASc,
              where I was employing Computer Vision to tackle biomechanical
              problems. After graduation I once more transitioned into software
              engineering. My diverse background helps me with a more wholesome
              understanding of all aspects of technical requirements, from
              problem definition to implementation. Currently, I'm interested in
              software engineering, artificial intelligence, machine learning
              and MLOps.
            </Typography>
            <Typography sx={{ marginTop: "3vh" }}>
              Here are some tools I have experience with:
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <TechCard
                name="JavaScript"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                mobile={true}
              />
              <TechCard
                name="TypeScript"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                mobile={true}
              />
              <TechCard
                name="React"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                mobile={true}
              />
              <TechCard
                name="HTML"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                mobile={true}
              />
              <TechCard
                name="CSS"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                mobile={true}
              />
              <TechCard
                name="Tailwind"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                mobile={true}
              />
              <TechCard
                name="NodeJS"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                mobile={true}
              />
              <TechCard
                name="ExpressJS"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                mobile={true}
              />
              <TechCard
                name="Python"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                mobile={true}
              />
              <TechCard
                name="AWS services"
                link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                mobile={true}
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default About;
