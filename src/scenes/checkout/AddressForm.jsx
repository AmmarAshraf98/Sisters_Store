import { Box, useMediaQuery, TextField } from "@mui/material";
import React from "react";

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4,minmax(0,1fr))"
      sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
    >
      <TextField
        fullWidth
        type="text"
        label="First Name"
        onChange={handleChange}
        value={values.fName}
        onBlur={handleBlur}
        name="fName"
        touched={touched}
        error={touched.fName && !!errors.fName}
        helperText={errors.fName}
        sx={{ gridColumn: "span 2" }}
      />

      <TextField
        fullWidth
        type="text"
        label="Last Name"
        onChange={handleChange}
        value={values.lName}
        onBlur={handleBlur}
        name="lName"
        sx={{ gridColumn: "span 2" }}
        touched={touched}
        error={touched.lName && !!errors.lName}
        helperText={errors.lName}
      />

      <TextField
        fullWidth
        type="text"
        label="Street Address"
        onChange={handleChange}
        value={values.streetOne}
        onBlur={handleBlur}
        error={touched.streetOne && !!errors.streetOne}
        touched={touched}
        name="streetOne"
        helperText={touched.streetOne && errors.streetOne}
        sx={{ gridColumn: "span 2" }}
      />

      <TextField
        fullWidth
        type="text"
        label="City"
        onChange={handleChange}
        value={values.city}
        onBlur={handleBlur}
        error={touched.city && !!errors.city}
        touched={touched}
        name="city"
        helperText={errors.city}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        label="Email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        error={touched.email && !!errors.email}
        touched={touched}
        name="email"
        helperText={touched.email && errors.email}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
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
      <TextField
        fullWidth
        type="text"
        label="Order Details"
        onChange={handleChange}
        value={values.comment}
        onBlur={handleBlur}
        error={touched.comment && !!errors.comment}
        touched={touched}
        name="comment"
        helperText={errors.comment}
        sx={{ gridColumn: "span 4" }}
      />
    </Box>
  );
};

export default AddressForm;
