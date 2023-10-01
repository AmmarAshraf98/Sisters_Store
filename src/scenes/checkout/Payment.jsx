import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Payment = ({ values, errors, touched, handleBlur, handleChange }) => {
  return (
    <Box m="30px 0">
      <Box>
        <Typography mb="15px">Contact Info</Typography>
      </Box>

      <TextField
        fullWidth
        type="email"
        label="Email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        error={touched.email && !!errors.email}
        touched={touched}
        name="email"
        helperText={touched.email && errors.email}
        sx={{ gridColumn: "span 4", mb: "15px" }}
      />

      <TextField
        fullWidth
        type="number"
        label="Phone Number"
        onChange={handleChange}
        value={values.phonenumber}
        onBlur={handleBlur}
        error={touched.phonenumber && !!errors.phonenumber}
        touched={touched}
        name="phonenumber"
        helperText={touched.phonenumber && errors.phonenumber}
        sx={{ gridColumn: "span 2" }}
      />
    </Box>
  );
};

export default Payment;
