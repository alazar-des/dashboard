import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Grid, Typography } from "@mui/material";
import Textfield from "../../components/FormUI/TextField/index";
import SubmitButton from "../../components/FormUI/Button/index";

const INITIAL_FORM_STATE = {
  spareName: "",
  unit: "",
  description: "",
  image: "",
};

const FORM_VALIDATION = Yup.object().shape({
  spareName: Yup.string().required("Spare is required"),
  unit: Yup.string().required("Measurement unit is required"),
  description: Yup.string(),
});

function SpareCatagoryForm() {
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
                Add Spare Catagory
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Textfield name="image" type="file" accept="image/*" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Textfield name="spareName" label="Spare Name" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="unit" label="Measurement Unit" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="description"
                    label="Description"
                    multiline
                    minRows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SubmitButton>Add Spare</SubmitButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default SpareCatagoryForm;
