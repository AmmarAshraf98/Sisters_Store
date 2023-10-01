import React from "react";
import { Badge, Box, IconButton } from "@mui/material";
import { shades } from "../../Theme";
import { useNavigate } from "react-router-dom";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../../state/store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="80%"
        margin="auto"
        padding="10px"
      >
        <Box
          onClick={() => navigate("/")}
          color={shades.secondary[500]}
          sx={{ "&:hover": { cursor: "pointer" }, fontWeight: "bold" }}
        >
          SISTERS ❤️..
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          alignItems="center"
        >
          {/* <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton> */}

          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setCartIsOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          {/* <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
