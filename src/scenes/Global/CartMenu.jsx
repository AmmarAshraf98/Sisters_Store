import React from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../Theme";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {
  inCreaseCount,
  deCreaseCount,
  removeFromCart,
  setCartIsOpen,
} from "../../state/store";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartopen = useSelector((state) => state.cart.isCartopen);

  const totalPrice = cart.reduce((total, item) => {
    return (total += item.count * item.attributes.price);
  }, 0);

  return (
    <Box
      display={isCartopen ? "block" : "none"}
      sx={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      position="fixed"
      width="100%"
      height="100%"
      left="0"
      top="0"
      zIndex={10}
    >
      <Box
        position="fixed"
        top="0"
        right="0"
        width="max(400px,30%)"
        height="100%"
        backgroundColor="white"
        overflow="auto"
      >
        <Box padding="30px" overflow="auto" height="100">
          {/* header */}
          <FlexBox mb="15px">
            <Typography variant="h3">Shopping Bag {cart.length}</Typography>
            <IconButton onClick={() => dispatch(setCartIsOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* cart list */}
          <Box>
            {cart.map((item, index) => (
              <Box key={index}>
                <FlexBox p="15px 0 ">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    {/* item name */}
                    <FlexBox mb="5px">
                      <Typography>{item.attributes.name}</Typography>

                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.shortDescription}</Typography>

                    {/* Count Amount */}
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(inCreaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(deCreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Box>

                      {/* price */}
                      <Typography fontWeight="bold">
                        {item.attributes.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* Actions */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                margin: "20px 0",
                padding: "20px 40px",
                minWidth: "100%",
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: shades.primary[300],
                },
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setCartIsOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
