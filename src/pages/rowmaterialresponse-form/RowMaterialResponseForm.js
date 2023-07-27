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
  rowmaterialType: "White M/B",
  quantity: 5,
  source: "Supplied",
  remark: ""
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

function RowMaterialResponseForm() {
  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, name) => {
          console.log(values, name);
        }}
      >
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{ paddingBottom: "16px", color: "#66788a" }}
              >
                Responed
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Select
                name="rowmaterialType"
                label="Row Material Type"
                options={rowmaterials}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="quantity" label="Quantity" disabled />
            </Grid>
            <Grid item xs={12}>
              <Select
                name="source"
                label="Source"
                options={sources}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="remark" label="Remark" multiline minRows={4}/>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SubmitButton name="accepted" color="success">Accept</SubmitButton>
                </Grid>
                <Grid item xs={6}>
                  <SubmitButton name="declined" color="error">Decline</SubmitButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default RowMaterialResponseForm;
