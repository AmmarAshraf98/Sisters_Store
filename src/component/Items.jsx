import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, IconButton, Typography, Button, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/store";
import { shades } from "../Theme";
import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";

const Items = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [isHover, setisHover] = useState(false);

  const {
    palette: { neutral },
  } = useTheme();

  const { image, category, price, name } = item.attributes;

  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  // swal alert
  const showConfirmation = () => {
    Swal.fire({
      icon: "success",
      text: "order added.",
      width: "220px",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      padding: "10px",
      timerProgressBar: true,
      customClass: {
        container: "dark-toast-container",
        icon: "dark-toast-title",
        popup: "dark-toast-popup",
        progress: "dark-toast-progress",
      },
    });
  };

  return (
    <Box width={width}>
      {/* item */}
      <Box
        position="relative"
        onMouseOver={() => setisHover(true)}
        onMouseOut={() => setisHover(false)}
        display="block"
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        {/* Buttons Wrapper */}
        <Box
          display={isHover ? "block" : "none"}
          position="absolute"
          left="0"
          bottom="10%"
          width="100%"
          padding="0 5%"
        >
          {/* cart state Control */}
          <Box display="flex" justifyContent="space-between">
            {/* Amount */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              {/* for prevent the user from set negative count */}
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
            </Box>

            {/* Button */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
                showConfirmation();
              }}
              sx={{ color: "white", backgroundColor: shades.primary[300] }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="30px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
};

export default Items;
