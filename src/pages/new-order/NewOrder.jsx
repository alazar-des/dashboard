import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@mui/material";
import Textfield from "../../components/FormUI/TextField/index";
import Select from "../../components/FormUI/Select/index";
import SubmitButton from "../../components/FormUI/Button/index";
import DatePicker from "../../components/FormUI/DateTimePicker/index";

const INITIAL_FORM_STATE = {
  productType: "",
  quantity: "",
  customer: "",
  deliveryDate: null,
};

const FORM_VALIDATION = Yup.object().shape({
  productType: Yup.string().required("Product type is required"),
  quantity: Yup.number()
    .integer()
    .typeError("Please enter a valid quantity")
    .required("Quantity is required"),
  customer: Yup.string().required("customer is equired"),
  deliveryDate: Yup.date()
    .required("Date is required")
    .max(new Date(), "Delivery date couldn't be earlier than today"),
});

const products = [
  "Brown 72*120 B/G 90gm",
  "Oromiya 72 x 120 90 G",
  "Oromiya 72*120 B/G 90gm",
  "Brown 72*120 90gm",
];

const customers = ["Miftah", "Bahiru", "Fana(Hassen)", "Siraj"];

function NewOrderForm() {
  return (
    <Container maxWidth="sm">
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
                Add New Order
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Select name="customer" label="Customer" options={customers} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Select
                name="productType"
                label="Product Type"
                options={products}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Textfield name="quantity" label="Quantity" />
            </Grid>
            <Grid item xs={12}>
              <DatePicker name="deliveryDate" label="Delivery Date" />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton>Add Order</SubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default NewOrderForm;
