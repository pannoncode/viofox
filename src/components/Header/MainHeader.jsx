import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/400.css";

const style = {
  mainBox: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    height: "30rem",
    backgroundColor: "#A0C3B0",
    background:
      "linear-gradient(146deg, rgba(160,195,176,1) 62%, rgba(46,162,155,0.9178265056022409) 88%)",
    boxShadow: 3,
    mb: 1,
  },
  contentBox: {
    width: {
      xs: "100%",
      sm: "100%",
      md: "50%",
      lg: "50%",
      xl: "50%",
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
    textAlign: "justify",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainHeader;
