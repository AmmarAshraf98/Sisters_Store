import React, { useEffect, useState } from "react";

import Items from "../../component/Items";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, IconButton, Tab, Tabs, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../Theme";
import { addToCart } from "../../state/store";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Swal from "sweetalert2";
import { Hearts } from "react-loader-spinner";

const ItemDetails = () => {
  const [tab, setTab] = useState("desc");
  const { itemId } = useParams();
  const [selected, setSelected] = useState({});
  const [related, setRelated] = useState([]);
  const [count, setcount] = useState(1);
  const [load, setload] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e, value) => {
    setTab(value);
  };

  // selected Item
  async function getItem() {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/items/${itemId}?populate=image`
      );
      const data = response.data.data;
      setSelected(data);
      setload(false);
    } catch (error) {
      console.log(error);
    }
  }

  // Realted Item
  async function getRelate() {
    try {
      const response = await axios.get(
        " http://localhost:1337/api/items/?populate=image"
      );
      const related = response.data.data;
      const rel = related.filter((item) => item.category === selected.category);
      setRelated(rel);
    } catch (error) {
      console.log(error);
    }
  }

  // Scroll To Top
  function ScrollToTop() {
    window.scrollTo(0, 0);
    return null;
  }

  useEffect(() => {
    getItem();
    getRelate();
    ScrollToTop();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

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

  // for loading spinner
  if (load) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="70vh"
        width="80vw"
        margin="auto"
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          color="red"
          textAlign="center"
          padding="90px 0"
        >
          .. Sisters Store ..
        </Typography>
        <Hearts
          height="100"
          width="100"
          textAlign="center"
          color="#d6001c"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Box>
    );
  }

  return (
    <Box width="80%" margin="80px auto">
      {/* Items Details */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="40px"
      >
        {/* image */}
        <Box flex="1 1 40%">
          <img
            width="100%"
            height="100%"
            alt={selected?.name}
            src={`http://localhost:1337${selected?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* Descriptions */}
        <Box flex="1 1 50%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>Product Details</Box>
            <Box
              sx={{ cursor: "pointer", color: "darkred" }}
              onClick={() => navigate("/")}
            >
              continue shopping{" "}
            </Box>
          </Box>

          {/* item details */}
          <Box m="65px 0 25px 0">
            <Typography variant="h3" mb={1}>
              {selected?.attributes?.name}
            </Typography>
            <Typography>£E {selected?.attributes?.price}</Typography>
            <Typography mt="20px">
              {selected?.attributes?.longDescription}
            </Typography>
          </Box>

          {/* item Actions */}
          <Box display="flex" minHeight="50px" alignItems="center">
            <Box
              display="flex"
              border={`1.5px solid ${shades.neutral[300]}`}
              alignItems="center"
              mr="20px"
              p="2px 4px"
            >
              <IconButton
                onClick={() => {
                  setcount(count + 1);
                }}
              >
                <AddIcon />
              </IconButton>
              <Typography padding="0 5px">{count}</Typography>
              <IconButton onClick={() => setcount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
            </Box>
            <Box>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#222222",
                  borderRadius: "0",
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                onClick={() => {
                  dispatch(addToCart({ item: { ...selected, count } }));
                  showConfirmation();
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <Typography sx={{ mr: "5px" }}> ADD TO WISHLIST</Typography>
              <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer  " }} />
            </Box>
            <Typography>
              CATEGORIES: <b>{selected?.attributes?.category}</b>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Reviews */}
      <Box m="30px 0">
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Description" value="desc" />
          <Tab label="Reviews" value="rev" />
        </Tabs>
        {tab === "desc" ? (
          <Typography m="20px 0 20px 5px" maxWidth="500px">
            {selected?.attributes?.longDescription}
          </Typography>
        ) : (
          <Typography m="20px 0 20px 5px">Reviews</Typography>
        )}
      </Box>

      {/* related Items */}
      <Box mt="80px">
        <Typography variant="h3" fontWeight="bold">
          Related Items
        </Typography>
        <Box
          mt="20px"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,300px)",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          {related?.map((item, index) => (
            <Items item={item} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
