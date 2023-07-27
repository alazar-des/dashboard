import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@mui/material";
import Textfield from "../../components/FormUI/TextField/index";
import SubmitButton from "../../components/FormUI/Button/index";
import Select from "../../components/FormUI/Select/index";

const rowmaterials = [
  "PP",
  "daplast green",
  "daplast BLACK",
  "sataindra red",
  "sataindra blue",
  "daplast ORANGE",
  "Filler",
  "Brown M.B",
  "White M/B",
  "Tinner",
  "Green ink",
  "Black ink",
  "Red ink",
  "Blue dark ink",
  "Blue light ink",
  "yellow",
  "oil",
];

const sources = ["Supplied", "Recycle"];

const INITIAL_FORM_STATE = {
  rowmaterialType: "",
  quantity: "",
};

const FORM_VALIDATION = Yup.object().shape({
  rowmaterialType: Yup.string().required("Row material type is required"),
  quantity: Yup.number()
    .required("Quantity is equired")
    .min(1, "Inter valid quantity"),
  source: Yup.mixed()
    .oneOf(["Supplied", "Recycle"])
    .required("source should be specified"),
});

function RowMaterialIssueForm() {
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{ paddingBottom: "16px", color: "#66788a" }}
              >
                Issue Row Material
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Select
                name="rowmaterialType"
                label="Row Material Type"
                options={rowmaterials}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="quantity" label="Quantity" />
            </Grid>
            <Grid item xs={12}>
              <Select name="source" label="Source" options={sources} />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton>Issue Row Material</SubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default RowMaterialIssueForm;
