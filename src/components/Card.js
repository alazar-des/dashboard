import { Box } from "@mui/material";
import React from "react";

function Card({ children, style }) {
  return (
    <Box
      sx={{
        border: "none",
        backgroundImage:
          "linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))",
        boxShadow:
          "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset",
        background: "#fff",
        borderRadius: "6px",
        padding: "20px 20px 30px 20px",
        marginTop: "24px",
        ...style,
      }}
    >
      {children}
    </Box>
  );
}

export default Card;
