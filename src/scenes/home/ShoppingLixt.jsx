import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setItems } from "../../state/store";
import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import Items from "../../component/Items";
import axios from "axios";
import { Hearts } from "react-loader-spinner";

const ShoppingLixt = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items);
  const [value, setValue] = useState("all");
  const [load, setload] = useState(true);

  async function getItem() {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/items?populate=image"
      );
      const data = res.data.data;
      dispatch(setItems(data));
    } catch (error) {
      console.log(error);
    } finally {
      setload(false);
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  const isNotMobile = useMediaQuery("(min-width:600px)");

  const newArriv = item.filter((item) => item.attributes.category === "New");
  const summer = item.filter((item) => item.attributes.category === "Summer");
  const winter = item.filter((item) => item.attributes.category === "Winter");
  const handmade = item.filter(
    (item) => item.attributes.category === "Handmade"
  );

  const handleChange = (e, value) => {
    setValue(value);
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
      <Typography textAlign="center" variant="h3">
        Our Featured <b>Products</b>
      </Typography>

      {/*select category */}
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNotMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="New" />
        <Tab label="BEST SELLERS" value="Winter" />
        <Tab label="TOP RATED" value="Summer" />
        <Tab label="Handmade" value="Handmade" />
      </Tabs>

      <Box
        margin="0 auto"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,300px)",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        {value === "all" &&
          item.map((item, index) => <Items item={item} key={index} />)}

        {value === "New" &&
          newArriv.map((item, index) => <Items item={item} key={index} />)}

        {value === "Summer" &&
          summer.map((item, index) => <Items item={item} key={index} />)}

        {value === "Winter" &&
          winter.map((item, index) => <Items item={item} key={index} />)}

        {value === "Handmade" &&
          handmade.map((item, index) => <Items item={item} key={index} />)}
      </Box>
    </Box>
  );
};

export default ShoppingLixt;
