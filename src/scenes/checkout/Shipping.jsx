import { Box, Typography } from "@mui/material";
import React from "react";
import AddressForm from "./AddressForm";

const Shipping = ({
  type,
  values,
  errors,
  touched,
  setFieldValue,
  handleBlur,
  handleChange,
}) => {
  return (
    <Box mt="20px">
      <Typography mb="15px" fontSize="18px">
        Billing Information
      </Typography>

      {/* billing form */}
      <AddressForm
        values={values}
        errors={errors}
        touched={touched}
        setFieldValue={setFieldValue}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default Shipping;
