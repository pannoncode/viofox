import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import backgroundPic from "./Pics/contact_background_2.jpg";
import backgroundPicRow from "./Pics/contact_background_row.jpg";

const ContactMe = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
          background:
            "radial-gradient(circle, rgba(160,195,176,1) 62%, rgba(46,162,155,0.7178265056022409) 88%)",
          mt: 1,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#444444",
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
            fontWeight: "bold",
            fontSize: {
              xs: "1.2rem",
              sm: "1.3rem",
              md: "1.5rem",
              lg: "2rem",
            },
          }}
          gutterBottom
        >
          Kapcsolat
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
        <Card sx={{ maxWidth: "50rem" }}>
          <CardMedia
            component="img"
            alt="Dominika"
            image={backgroundPic}
            sx={{
              filter: "grayscale(40%)",
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 10px 15px rgba(0,0,0,0.3)",
              },
            }}
          />
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              //   m: 1,
              backgroundImage: `url(${backgroundPicRow})`,
            }}
          >
            <FacebookIcon />
            <InstagramIcon />
            <AlternateEmailIcon />
            <AdUnitsIcon />
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default ContactMe;
