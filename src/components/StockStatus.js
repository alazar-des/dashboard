import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MyResponsivePie from "./PieChart";

const data = [
  {
    id: "Brown 72*120 B/G 90gm",
    label: "Brown 72*120 B/G 90gm",
    value: 14000,
    color: "hsl(30, 100%, 29%)",
  },
  {
    id: "Oromiya 72 x 120 90 G",
    label: "Oromiya 72 x 120 90 G",
    value: 21800,
    color: "#1EAA1C",    
  },
  {
    id: "Oromiya 72*120 B/G 90gm",
    label: "Oromiya 72*120 B/G 90gm",
    value: 16800,
    color: "hsl(120, 71%, 39%)",
  },
  {
    id: "Brown 72*120 90gm",
    label: "Brown 72*120 90gm",
    value: 10500,
    color: "#944A00",
  },
];

function StockStatus() {
  return (
    <Box
      sx={{
        height: 400,
        width: 1,
        border: "none",
        backgroundImage:
          "linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))",
        boxShadow:
          "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset",
        padding: "20px 20px 30px 20px",
        marginTop: "16px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" mb={1} color="#344050">
        Product Stock Status
      </Typography>
      <MyResponsivePie data={data} />
    </Box>
  );
}

export default StockStatus;
