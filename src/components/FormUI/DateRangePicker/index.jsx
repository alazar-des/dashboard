import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Typography, Container } from "@mui/material";
import { TextField } from "@mui/material";

export default function DatePickerValue({ startDateState, endDateState }) {
  const [startDate, setStartDate] = startDateState;
  const [endDate, setEndDate] = endDateState;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          "&.MuiContainer-root": {
            marginRight: 0,
          },
        }}
      >
        <TextField
          label="From"
          type="date"
          size="small"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ shrink: true }}
        />
        <Typography>&#8212;</Typography>
        <TextField
          label="To"
          type="date"
          size="small"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          inputProps={{ style: { fontSize: 13 } }}
          sx={{ "&. MuiInputBase-input": { padding: "24px 14px" } }}
        />
      </Container>
    </LocalizationProvider>
  );
}
