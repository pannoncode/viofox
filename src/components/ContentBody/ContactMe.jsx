import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

const ContactMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "30rem",
        mb: 2,
        mt: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "50%",
          backgroundColor: "#A0C3B0",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#444444",
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
            fontWeight: "bold",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <FacebookIcon />
            <Typography
              variant="overline"
              display="block"
              sx={{ ml: 1 }}
              gutterBottom
            >
              Facebook
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <InstagramIcon />
            <Typography
              variant="overline"
              display="block"
              sx={{ ml: 1 }}
              gutterBottom
            >
              Instagram
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <AlternateEmailIcon />
            <Typography
              variant="overline"
              display="block"
              sx={{ ml: 1 }}
              gutterBottom
            >
              Email
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <AdUnitsIcon />
            <Typography
              variant="overline"
              display="block"
              sx={{ ml: 1 }}
              gutterBottom
            >
              Telefon
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactMe;
