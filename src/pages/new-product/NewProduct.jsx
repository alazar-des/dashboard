import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@mui/material";
import Textfield from "../../components/FormUI/TextField/index";
import SubmitButton from "../../components/FormUI/Button/index";

const INITIAL_FORM_STATE = {
  productType: "",
  unit: "",
};

const FORM_VALIDATION = Yup.object().shape({
  productType: Yup.string().required("Product type is required"),
  unit: Yup.string().required("Measurement unit is equired"),
});

function NewProductForm() {
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
                Add New Product
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="productType"
                label="Product Type"
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="unit"
                label="Measurement Unit"
              />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton>Add Product</SubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default NewProductForm;
