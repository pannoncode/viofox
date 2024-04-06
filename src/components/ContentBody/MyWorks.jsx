import React from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const MyWorks = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
          //   backgroundColor: "#a0c3c1",
          //   backgroundColor:"rgba(160,195,176)",
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
          Munkáim
        </Typography>
      </Box>
      <Box sx={{ width: "100%", overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0px 10px 15px rgba(0,0,0,0.3)",
                },
              }}
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default MyWorks;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];
