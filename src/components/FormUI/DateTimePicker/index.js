import React from "react";
import { useField, useFormikContext } from "formik";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";

const DatePickerWrapper = ({ name, ...Props }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const config = {
    ...field,
    ...Props,
    variant: "outlined",
    size: "small",
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...config}
        onChange={(date) => setFieldValue(name, date)}
        renderInput={(params) => {
          return <TextField {...params} />;
        }}
        InputProps={{
          sx: { "& .MuiOutlinedInput-input": { padding: "8.5px 14px" } },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerWrapper;
