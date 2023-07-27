import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButttonWrapper = ({ children, ...props }) => {
  const { values, submitForm } = useFormikContext();

  const { color, name } = { ...props };

  const handleSubmit = () => {
    if (name) values.status = name;
    submitForm();
  };

  const config = {
    children,
    size: "small",
    variant: "contained",
    fullWidth: true,
    color: color ? color : "primary",
    onClick: handleSubmit,
  };

  return (
    <Button {...config} sx={{ mt: 4 }}>
      {children}
    </Button>
  );
};

export default ButttonWrapper;
