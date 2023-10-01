import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { shades } from "../../Theme";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ForwardToInboxTwoToneIcon from "@mui/icons-material/ForwardToInboxTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box marginTop="70px" padding="20px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        flexDirection={isNonMobile ? "row" : "column"}
        rowGap="20px"
      >
        <Box display="flex" alignItems="center">
          <WhatsAppIcon
            style={{ color: "green", fontSize: "20px", marginRight: "5px" }}
          />
          01014851383
          <br />
          01095867986
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          color={shades.secondary[500]}
        >
          Sisters ❤️..
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Link href="#" underline="none">
            <ForwardToInboxTwoToneIcon
              sx={{ color: "green", fontSize: "20px", marginRight: "5px" }}
            />
          </Link>

          <Link
            href="https://www.facebook.com/groups/862524420599804"
            underline="none"
          >
            <FacebookIcon sx={{ color: "#3232f1", fontSize: "20px" }} />
            {/* <FacebookOutlinedIcon
                sx={{ color: "green", fontSize: "20px", marginRight: "5px" }}
              /> */}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
