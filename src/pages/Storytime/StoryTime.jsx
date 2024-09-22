import { useState } from "react";
import HTMLFlipBook from "react-pageflip";

import {
  Box,
  Typography,
  TextField,
  Backdrop,
  Button,
  CircularProgress,
} from "@mui/material";

import { Configuration, OpenAIApi } from "openai";
import { useWindowWidth } from "../../utils";

import colors from "../../assets/colors";

const Book = ({ details }) => {
  return (
    <HTMLFlipBook width={500} height={700}>
      <Box
        sx={{
          backgroundColor: "#523211",
          border: "1px black",
          height: "100%",
          width: "100%",
          display: "flex !important",
          justifyContent: "center",
        }}
      />
      <Box
        sx={{
          backgroundColor: colors.darkShade,
          border: "1px black",
          color: "#ecb34f",
          height: "100%",
          width: "100%",
          display: "flex !important",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            paddingTop: "100px",
            paddingInline: "10px",
          }}
          variant="h4"
        >
          {details.title}
        </Typography>
      </Box>
      {details.pages.map((page, index) => (
        <Box
          sx={{
            backgroundColor: "white",
            border: "1px black",
            display: "flex !important",
            alignItems: "center",
          }}
        >
          {page.image ? (
            <Box component="img" src={page.image} sx={{ width: "500px" }} />
          ) : (
            <Typography
              sx={{
                padding: "1vw",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              {page.content}
            </Typography>
          )}
        </Box>
      ))}
      <Box
        sx={{
          backgroundColor: colors.darkShade,

          border: "1px black",
          color: "#ecb34f",
          height: "100%",
          width: "100%",
          display: "flex !important",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            paddingTop: "100px",
            paddingInline: "10px",
          }}
          variant="h4"
        >
          The End
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#523211",
          border: "1px black",
          color: "#ecb34f",
          height: "100%",
          width: "100%",
          display: "flex !important",
          justifyContent: "center",
        }}
      />
    </HTMLFlipBook>
  );
};

const StoryTime = () => {
  const width = useWindowWidth();
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [title, setTitle] = useState("");
  const [book, setBook] = useState({ title: "", pages: [] });
  const [showBook, setShowBook] = useState(false);
  const [error, setError] = useState(false);

  const callOpenAi = async () => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    setLoading(true);
    try {
      const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a children book writer. Write an approximately 300 word story with the propmt provided by the user. At the end of each paragraph, summarize the paragraph in a sentence that can be used as a prompt for an image generator. Format each paragraph and and prompt like so: paragraph (summary: insert summary)\n\n",
          },
          {
            role: "user",
            content: `write the story of ${prompt}`,
          },
        ],
      });

      const bookDetails = { title, pages: [] };

      for (const paragraph of res.data.choices[0].message.content.split(
        "\n\n"
      )) {
        const paragraphContent = paragraph.toLowerCase().split("(summary:");
        bookDetails.pages.push({ content: paragraphContent[0] });

        const imageResponse = await openai.createImage({
          prompt: `in children's book illustration style, the story is ${prompt} make an illustration showing ${paragraphContent[1]}`,
          n: 1,
          size: "512x512",
        });

        bookDetails.pages.push({ image: imageResponse.data.data[0].url });
      }

      setBook(bookDetails);
    } catch (e) {
      setLoading(false);
      setError(true);
      return;
    }
    setShowBook(true);
    setLoading(false);
    return;
  };

  return width > 1000 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "10vh",
        maxWidth: "100%",
      }}
    >
      <Box sx={{ paddingInline: "5vw", paddingBottom: "20vh" }}>
        <Typography
          sx={{
            paddingTop: "10vh",
            paddingBottom: "2vh",
            color: colors.darkShade,
          }}
          variant="h3"
        >
          AI STORYTIME
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: colors.darkShade,
            paddingBottom: "2vh",
          }}
        >
          Welcome to AI storytime! The idea behind this project is to create
          complete story books in a matter of minutes purely out of AI. I use
          chatGPT to get the stories and dall.e to create the illustrations. Now
          you can create your personalized storybooks with a simple prompt.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: "2vh",

            color: colors.darkAccent,
            paddingBottom: "2vh",
          }}
        >
          Please describe your story and enter a title for it <br />
        </Typography>
        <Typography
          sx={{
            color: colors.darkShade,
            paddingBottom: "2vh",
          }}
        >
          (you could reuse an old fairytale name in the prompt for a modern
          retelling or get creative!)
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            sx={{ marginRight: "30px", zIndex: "0" }}
            label={"Story Prompt"}
          />
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            sx={{ marginRight: "30px", zIndex: "0" }}
            label={"Book Title"}
          />
          <Button
            variant="contained"
            sx={{
              color: colors.lightShade,
              backgroundColor: colors.darkAccent,
            }}
            onClick={async () => {
              setError(false);
              setShowBook(false);
              if (prompt !== "") {
                await callOpenAi();
              }
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      {showBook ? <Book details={book} /> : <></>}
      {error ? (
        <Typography
          sx={{
            color: colors.darkShade,
          }}
        >
          An error occured while connecting to openai servers, please try again
          later
        </Typography>
      ) : (
        <></>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "10vh",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      Please view in a bigger screen for optimal results!
    </Box>
  );
};

export default StoryTime;
