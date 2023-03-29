import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextFieldWrapper = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const config = {
    ...field,
    ...props,
    size: "small",
    fullWidth: true,
    variant: 'outlined',
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return <TextField {...config} />;
}

export default TextFieldWrapper;