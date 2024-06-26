import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import cardPic from "./Pics/dominika.jpeg";
// import cardBackGround from "./Pics/background_3.jpg";
import "@fontsource/roboto/300.css";

const style = {
  fontsTitle: {
    color: "#444444",
    textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
    fontWeight: "bold",
    fontSize: {
      xs: "1.2rem",
      sm: "1.3rem",
      md: "1.5rem",
      lg: "2rem",
    },
  },
};

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
        boxShadow: 3,
        p: {
          xs: 0.5,
          md: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            md: "stretch",
          },
          width: "100%",
          overflow: "hidden",
          backgroundColor:"rgba(160,195,176)",
          mr: {
            md: 0.5,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            p: {
              xs: 2,
              md: 5,
            },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#444444",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
              fontWeight: "bold",
              mb: 2,
            }}
            gutterBottom
          >
            Rólam
          </Typography>

          <Typography sx={style.fontsTitle} gutterBottom>
            Szia, Dominika vagyok!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#444444",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
              fontWeight: "bold",
              textAlign: "justify",
            }}
            gutterBottom
          >
            Ezt a szöveget a netről loptam!!!! A munkám során - ahogyan az
            életben is - a természetességre törekszem és arra, hogy az együtt
            töltött idő alatt mindenki jól érezze magát: kicsi, nagy, sőt, még
            az apukák is. :) A fotózásban külön öröm, hogy a legszebb
            pillanatokat örökíthetem meg, legyen az a várandósság időszaka, egy
            újszülött baba első napjai, felhőtlen gyereknevetés, vagy a
            boldogító igen kimondása.
          </Typography>
        </Box>
        {/* </CardContent> */}
      </Box>
      <Card
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            md: "stretch",
          },
          width: "100%",
          overflow: "hidden",
          height: {
            xs: "30rem",
            sm: "30rem",
            md: "30rem",
          },
          ml: {
            md: 0.5,
          },
          mt: {
            xs: 1,
            md: 0,
          },
        }}
      >
        <CardMedia
          component="img"
          alt="Dominika"
          image={cardPic}
          sx={{
            filter: "grayscale(40%)",
            height: {
              xs: "30rem",
              md: "100%",
            },
            width: {
              xs: "100%",
              md: "100%",
            },
            flexBasis: {
              xs: "auto",
            },
            transition: "transform 0.5s ease, box-shadow 0.5s ease",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0px 10px 15px rgba(0,0,0,0.3)",
            },
          }}
        />
      </Card>
    </Box>
  );
};

export default AboutMe;
