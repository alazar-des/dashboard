import React from "react";
import { Box } from "@mui/system";
import Card from "./Card";
import { Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Link from "@mui/material/Link";

function Overview() {
  return (
    <Box
      sx={{
        padding: "20px 20px 30px 20px",
        marginTop: "16px",
        backgroundColor: "#fff",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      <Card>
        <>
          <Typography
            variant="h6"
            sx={{
              color: "#344050",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Total Stock
          </Typography>
          <Typography
            sx={{
              marginTop: "8px",
              marginBottom: "12px",
              fontSize: "32px",
              color: "#f5803e",
            }}
          >
            43,594
          </Typography>
          <Link
            sx={{
              fontSize: "12px",
              color: "#2c7be5",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            See all <KeyboardArrowRightRoundedIcon sx={{ fontSize: "16px" }} />
          </Link>
        </>
      </Card>
      <Card>
        <>
          <Typography
            variant="h6"
            sx={{
              color: "#344050",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Total Order
          </Typography>
          <Typography
            sx={{
              marginTop: "8px",
              marginBottom: "12px",
              fontSize: "32px",
              color: "#27bcfd",
            }}
          >
            25,984
          </Typography>
          <Link
            sx={{
              fontSize: "12px",
              color: "#2c7be5",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            See all <KeyboardArrowRightRoundedIcon sx={{ fontSize: "16px" }} />
          </Link>
        </>
      </Card>
      <Card>
        <>
          <Typography
            variant="h6"
            sx={{
              color: "#344050",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Average Daily Production
          </Typography>
          <Typography
            sx={{
              marginTop: "8px",
              marginBottom: "12px",
              fontSize: "32px",
              color: "#5e6e82",
            }}
          >
            13,720
          </Typography>
          <Link
            sx={{
              fontSize: "12px",
              color: "#2c7be5",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            See all <KeyboardArrowRightRoundedIcon sx={{ fontSize: "16px" }} />
          </Link>
        </>
      </Card>
    </Box>
  );
}

export default Overview;
