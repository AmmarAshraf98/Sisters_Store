import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Shipping from "./Shipping";
import { shades } from "../../Theme";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
// import Swal from "sweetalert";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";
import { useNavigate } from "react-router-dom";
import { Hearts } from "react-loader-spinner";

const CheckOut = () => {
  //initial states
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;
  const isSecondtStep = activeStep === 1;
  const navigate = useNavigate();

  // select cart from store
  const cart = useSelector((state) => state.cart.cart);

  // initialValues
  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    phonenumber: "",
    streetOne: "",
    city: "",
    comment: "",
  };

  // validation
  const validateSchema = Yup.object().shape({
    fName: Yup.string().required("required"),
    lName: Yup.string().required("required"),
    streetOne: Yup.string().required("required"),
    city: Yup.string().required("required"),
    comment: Yup.string().required("required"),
    email: Yup.string().required("required").email(),
    phonenumber: Yup.number().required("required"),
  });

  // submitting
  const handleFormSubmit = async (values) => {
    setActiveStep(activeStep + 1);

    const templateParams = {
      ...values,
      items: cart.map((product) => ({
        name: product.attributes.name,
        price: product.attributes.price,
        count: product.count,
      })),
    };

    emailjs
      .send(
        "service_u01p4rt",
        "template_fy9gai8",
        templateParams,
        "DakfOK2cxTn87GdnI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );

    // swal alert
    Swal.fire({
      icon: "success",
      text: "order send successfully.",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        container: "dark-toast-container",
        icon: "dark-toast-title",
        popup: "dark-toast-popup",
        progress: "dark-toast-progress",
      },
    });

    // back to home page
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <Box width="80%" margin="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>

      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validateSchema}
        >
          {({
            errors,
            values,
            touched,
            setFieldValue,
            handleBlur,
            handleChange,
          }) => (
            <Form>
              {/* first form */}
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              )}

              {/* second form */}
              {isSecondtStep && (
                <Typography
                  variant="h3"
                  textAlign="center"
                  fontWeight="bold"
                  padding="90px 0"
                >
                  Thank you for being our valued customer ❤️.
                </Typography>
              )}

              {/* Buttons */}
              <Box
                display="flex"
                justifyContent="space-between"
                gap="50px"
                mt="15px"
              >
                {isFirstStep && (
                  <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[400],
                      boxShadow: "none",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                  >
                    Place Order
                  </Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CheckOut;
