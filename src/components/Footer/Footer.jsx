import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          background:
            "radial-gradient(circle, rgba(160,195,176,1) 62%, rgba(46,162,155,0.7178265056022409) 88%)",
          color: "#444444",
          textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
          fontWeight: "bold",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
