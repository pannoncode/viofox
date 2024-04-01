import React from "react";
import Box from "@mui/material/Box";

const MainLayout = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // background:"linear-gradient(146deg, rgba(66,56,54,1) 70%, rgba(215,215,215,1) 99%, rgba(213,212,212,1) 100%)",
        // background: "linear-gradient(146deg, rgba(128,167,165,1) 55%, rgba(46,162,155,0.6293110994397759) 75%, rgba(210,192,192,1) 83%)",
        // background: "#a0c3c1",
        background:
          "linear-gradient(146deg, rgba(160,195,176,1) 53%, rgba(46,162,155,0.9178265056022409) 76%)",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "98%", // mobil eszközökön (0px és feljebb)
            sm: "98%", // kis képernyőkön (600px és feljebb)
            md: "98%", // közepes képernyőkön (900px és feljebb)
            lg: "95%", // nagy képernyőkön (1200px és feljebb)
            xl: "90%", // extra nagy képernyőkön (1536px és feljebb)
          },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default MainLayout;
