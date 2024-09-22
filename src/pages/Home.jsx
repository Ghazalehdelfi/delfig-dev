import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { Typography, Box, Link, Slide, Button } from "@mui/material";

import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

import { useWindowWidth } from "../utils";

import colors from "../assets/colors";
import * as animationData from "./animation.json";

export default function Home() {
  const animation = useRef();
  const width = useWindowWidth();
  const [takeCard, setTakeCard] = useState(false);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animation.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
      segments: false,
    });
    return () => instance.destroy();
  }, [width]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "50vh",
      }}
    >
      <Box sx={{ width: `${width > 600 ? "60%" : "100%"}` }}>
        <Typography
          sx={{
            fontSize: "1.7rem",
            color: colors.darkAccent,
            textAlign: "justify",
            fontWeight: "700",
          }}
        >
          Hi and welcome!
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: colors.darkShade,
            textAlign: "justify",
            fontWeight: "500",
          }}
        >
          My name is Ghazaleh Delfi. I am a full-stack software developer,
          passionate about problem solving and making cool things. <br />
          Check my CV or look in my projects section and play around. If you
          like what you see, take my card and keep in touch! &#128521;
        </Typography>
        {takeCard ? (
          <></>
        ) : (
          <Button
            sx={{
              marginTop: "5vh",
              color: colors.lightShade,
              backgroundColor: colors.darkAccent,
            }}
            onClick={() => setTakeCard(true)}
          >
            Card me
          </Button>
        )}
        <Slide direction="right" in={takeCard}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: colors.mainBrand,
              marginTop: "5vh",
              borderRadius: "15px",
              width: "max-content",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#d7c1db",
                borderRadius: "15px",
                width: "max-content",
                padding: "10px",
                fontFamily: "typewriter",
              }}
            >
              <Typography
                sx={{
                  color: colors.darkShade,
                  marginBottom: "3vh",
                  fontFamily: "typewriter",
                }}
                variant="h5"
              >
                Contact info
              </Typography>
              <Typography
                sx={{
                  color: colors.darkShade,
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1vh",
                  fontFamily: "typewriter",
                }}
              >
                <EmailIcon
                  sx={{
                    padding: "0",
                    position: "inline",
                    marginRight: "1vw",
                    fill: colors.darkShade,
                  }}
                />
                <Link
                  href="mailto: GhazalehDelfi@gmail.com"
                  underline="none"
                  sx={{ color: colors.darkShade }}
                >
                  GhazalehDelfi@gmail.com
                </Link>
              </Typography>
              <Typography
                sx={{
                  color: colors.darkShade,
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1vh",
                  fontFamily: "typewriter",
                }}
              >
                <GitHubIcon
                  sx={{
                    padding: "0",
                    position: "inline",
                    marginRight: "1vw",
                    fill: colors.darkShade,
                  }}
                />
                <Link
                  href="https://www.github.com/Ghazalehdelfi"
                  underline="none"
                  sx={{ color: colors.darkShade }}
                >
                  github.com/Ghazalehdelfi
                </Link>
              </Typography>
              <Typography
                sx={{
                  color: colors.darkShade,
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1vh",
                  fontFamily: "typewriter",
                }}
              >
                <LinkedInIcon
                  sx={{
                    padding: "0",
                    position: "inline",
                    marginRight: "1vw",
                    fill: colors.darkShade,
                  }}
                />
                <Link
                  href="https://www.linkedin.com/in/ghazalehdelfi/"
                  underline="none"
                  sx={{ color: colors.darkShade }}
                >
                  linkedin.com/in/ghazalehdelfi/
                </Link>
              </Typography>
            </Box>
          </Box>
        </Slide>
      </Box>
      {width > 600 ? (
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "right",
            flexDirection: "column",
          }}
          ref={animation}
        />
      ) : (
        <></>
      )}
    </Box>
  );
}
