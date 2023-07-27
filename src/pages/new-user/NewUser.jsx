import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@mui/material";
import Textfield from "../../components/FormUI/TextField/index";
import Select from "../../components/FormUI/Select/index";
import SubmitButton from "../../components/FormUI/Button/index";
import country from "../../data/country";

const INITIAL_FORM_STATE = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "Ethiopia",
  role: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  middleName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required!"),
  role: Yup.string().required("Role is equired"),
});

const roles = [
  "Admin",
  "Manager",
  "Store",
  "Spare Store",
  "Recycle Manager",
  "Technician",
];

function UserForm() {
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log("submitted", values);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{ paddingBottom: "16px", color: "#66788a" }}
              >
                Create New User
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Textfield name="firstName" label="First Name" />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Textfield name="middleName" label="Middle Name" />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Textfield name="lastName" label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="email" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="phone" label="Phone" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Textfield name="addressLine1" label="Address Line 1" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Textfield name="addressLine2" label="Address Line 2" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Textfield name="city" label="City" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Textfield name="state" label="State" />
            </Grid>
            <Grid item xs={12}>
              <Select name="country" label="Country" options={country} />
            </Grid>
            <Grid item xs={12}>
              <Select name="role" label="Role" options={roles} />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton>Create User</SubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default UserForm;
