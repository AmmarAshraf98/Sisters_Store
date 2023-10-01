import React from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";

import { shades } from "../../Theme";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import imgOne from "../../assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg";
import imgTow from "../../assets/chris-ghinda-wK2ESlRRZQ8-unsplash.jpeg";
import imgThree from "../../assets/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg";
import imgFour from "../../assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg";
import imgFive from "../../assets/toa-heftiba-dti56waifB4-unsplash.jpeg";
import imgsix from "../../assets/e0765402-7558-451a-8e24-2c6782e0f115.jpg";
import imgseven from "../../assets/3c2fc105-d297-4e02-9fa0-11f72d61b050.jpg";
import imgei from "../../assets/85787e7a-153b-4a4b-bd86-69a730588025.jpg";
import imgnin from "../../assets/f58172dd-6072-4a09-b0df-3d0b58fce441.jpg";
import imgten from "../../assets/ba7a3bea-2ea3-4cc2-bfd4-972a969a34ad.jpg";
import ii from "../../assets/8651aa3c-d0e3-4942-86c9-d17e26ea4b83.jpg";
import ee from "../../assets/2e39d331-d120-4673-861d-0e52039e4001.jpg";
import last from "../../assets/3a632e41-65d3-4085-a2f9-2f4736115022.jpg";
import none from "../../assets/new/10e2bfad-7d89-428e-902a-a79d19927120.jpg";
import notwo from "../../assets/new/549747ab-3eaf-42d1-af0a-930abbfb7f81.jpg";
import nothre from "../../assets/new/74d37e0f-5114-4bfd-a70c-b00677ad8eea.jpg";
import ff from "../../assets/new/dee56251-c891-4689-b023-03e861b3897b.jpg";
import fff from "../../assets/new/e48ab8c2-cfee-4704-9ca7-3b4751a183ac.jpg";
const MainCarsoule = () => {
  const images = [last, none, notwo, nothre, ff, fff];
  const isNOtMobile = useMediaQuery("(min-width:600px)");

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {images.map((item, index) => (
        <Box key={index}>
          <img
            src={item}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.3)"
            position="absolute"
            top="46%"
            borderRadius="1px"
            left={isNOtMobile ? "10%" : "0"}
            right={isNOtMobile ? "undefined " : "0"}
            margin={isNOtMobile ? undefined : "0 auto"}
            maxWidth={isNOtMobile ? undefined : "290px"}
          >
            <Typography color={shades.secondary[600]} fontWeight="bold">
              -- Sistrs ❤️..{" "}
            </Typography>
            <Typography variant="h3">New Brand</Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarsoule;
