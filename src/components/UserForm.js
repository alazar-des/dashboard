import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@material-ui/core";

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
  country: "",
  role: "",
};

const FORM_VALIDATION = {
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
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  Role: Yup.string().required("Required"),
};

function UserForm() {
  <Container maxWidth="md">
    <Formik
      initialValues={{
        ...INITIAL_FORM_STATE,
      }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Create New User</Typography>
          </Grid>
          <Grid item xs={4}>
            <Textfield name="firstName" label="First Name" />
          </Grid>
          <Grid item xs={4}>
            <Textfield name="middleName" label="Middle Name" />
          </Grid>
          <Grid item xs={4}>
            <Textfield name="lastName" label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <Textfield name="firstName" label="First Name" />
          </Grid>{" "}
          <Grid item xs={12}>
            <Textfield name="email" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <Textfield name="phone" label="Phone" />
          </Grid>
          <Grid item xs={12}>
            <Typography>Address</Typography>
          </Grid>
          <Grid item xs={12}>
            <Textfield name="addressLine1" label="Address Line 1" />
          </Grid>
          <Grid item xs={12}>
            <Textfield name="addressLine2" label="Address Line 2" />
          </Grid>
          <Grid item xs={6}>
            <Textfield name="city" label="City" />
          </Grid>
          <Grid item xs={6}>
            <Textfield name="state" label="State" />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  </Container>;
}

export default UserForm;
