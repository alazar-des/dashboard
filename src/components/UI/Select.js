import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Input = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 3,
    fontSize: 12,
    padding: "4px 12px",
    boxShadow:
      "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset",
    "&:focus": {
      boxShadow:
        "rgba(16, 112, 202, 0.14) 0px 0px 0px 3px, rgba(67, 90, 111, 0.3) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.14) 0px -1px 1px 0px inset;",
    },
    "&:hover": {
      backgroundImage:
        "linear-gradient(rgb(250, 251, 251), rgb(234, 236, 238))",
    },
    "&:active": {
      backgroundImage: "none",
      backgroundColor: "rgba(16, 112, 202, 0.09)",
      boxShadow:
        "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px 1px 1px 0px inset",
    },
  },
}));

export default function BasicSelect({ options, state, label }) {
  const [value, setValue] = state;
  return (
    <div>
      <FormControl sx={{ minWidth: 120, fontSize: "12px" }} size="small">
        <Select
          displayEmpty
          value={value}
          onChange={(e) => setValue(e.target.value)}
          input={<Input />}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" sx={{ color: "#4d5969A0" }}>
            <em>{label}</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
