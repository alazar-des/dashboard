import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

export default function BasicSelect({ name, options, state, ...props }) {
  const [value, setValue] = state;

  const config = {
    ...props,
    select: true,
    size: "small",
  };

  return (
    <Box sx={{ width: "150px" }}>
      <FormControl fullWidth>
        <TextField
          {...config}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
}
