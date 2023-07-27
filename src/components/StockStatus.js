import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import PieChart from "./PieChart";

const data = [
  {
    id: "Brown 72*120 B/G 90gm",
    label: "Brown 72*120 B/G 90gm",
    value: 14000,
    color: "#9C8DDE",
  },
  {
    id: "Oromiya 72 x 120 90 G",
    label: "Oromiya 72 x 120 90 G",
    value: 21800,
    color: "#7CCDA7",
  },
  {
    id: "Oromiya 72*120 B/G 90gm",
    label: "Oromiya 72*120 B/G 90gm",
    value: 16800,
    color: "#47B881",
  },
  {
    id: "Brown 72*120 90gm",
    label: "Brown 72*120 90gm",
    value: 10500,
    color: "#7266B1",
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
      <PieChart data={data} />
    </Box>
  );
}

export default StockStatus;
