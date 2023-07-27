import React from "react";
import Card from "./Card";
import { Typography, Box } from "@mui/material";
import PieChart from "./Charts/PieChart";
import { stockProductData } from "../data/data";

import StockCard from "./StockCard/StockCard";

function ProductStockStatus() {
  return (
    <Card>
      <Typography variant="h6" mb={1} color="#344050">
        Product Stock Status
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: 300,
            width: 1,
            border: "none",
            backgroundColor: "#fff",
          }}
        >
          <PieChart data={stockProductData} />
        </Box>
        <StockCard />
      </Box>
    </Card>
  );
}

export default ProductStockStatus;
