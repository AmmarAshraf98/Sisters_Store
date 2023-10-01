import React, { useState } from "react";
import { Box, IconButton, Typography, InputBase, Divider } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
const Subscripe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscripe To Our Newsletter</Typography>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        width="65%"
        margin="15px auto"
        sx={{ backgroundColor: "#F2f2f2" }}
        display="flex"
        alignItems="center"
        padding="2px 4px"
      >
        <InputBase
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          width=""
        />
        <Divider sx={{ height: 28, margin: 0.5 }} orientation="vertical" />
        <Typography padding={1} sx={{ cursor: "pointer" }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscripe;
