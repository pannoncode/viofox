import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/400.css";

import headerPic from "./Pics/cardBackground.jpg";

const style = {
  mainBox: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    height: "30rem",

    // background:
    //   "linear-gradient(146deg, rgba(66,56,54,1) 70%, rgba(215,215,215,1) 99%, rgba(213,212,212,1) 100%)",
    // backgroundColor: "#a0c3c1",
    // backgroundColor: "80a7a5",
    backgroundColor: "#A0C3B0",
    // background:"linear-gradient(146deg, rgba(128,167,165,1) 55%, rgba(46,162,155,0.6293110994397759) 75%, rgba(210,192,192,1) 83%)",
    // background:"linear-gradient(146deg, rgba(160,195,176,1) 53%, rgba(46,162,155,0.9178265056022409) 76%)",
    background: "linear-gradient(146deg, rgba(160,195,176,1) 62%, rgba(46,162,155,0.9178265056022409) 88%)",
    // background: "linear-gradient(0deg, rgba(34,193,195,1) 30%, rgba(253,113,45,1) 100%)",
    // backgroundImage: `url(${headerPic})`,
    // backgroundSize: "100% 100%",
    // backgroundPosition: "center",

    boxShadow: 3,
    // filter: "contrast(120%)",
    mb: 1,
    // backgroundColor: "rgba(0,0,0, .3)",
  },
  contentBox: {
    width: {
      xs: "100%",
      sm: "100%",
      md: "50%",
      lg: "auto",
      xl: "auto",
    },
    m: {
      xs: 2,
      sm: 3,
      md: 4,
      lg: 4,
      xl: 4,
    },
    color: "#444444",
    textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
    fontWeight: "bold",
  },
  fonts: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.3rem",
      md: "1.5rem",
      lg: "2rem",
    },
  },
};

const MainHeader = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={style.mainBox}>
        <Box sx={style.contentBox}>
          <Box sx={{ m: 2 }}>
            <Typography variant="subtitle2">kis szöveg</Typography>
          </Box>
          <Box sx={{ m: 3 }}>
            <Typography sx={style.fonts}>
              Lorem ipsum dolor sit amet,
            </Typography>
            <Typography sx={style.fonts}>
              consectetur adipiscing elit, sed do
            </Typography>
            <Typography sx={style.fonts}>
              eiusmod tempor incididunt ut labore
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainHeader;
