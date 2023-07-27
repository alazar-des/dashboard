import { Box, Typography, Divider, Grid } from "@mui/material";
import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

const Card = ({ values }) => {
  const { title, currentMonthValue, lastMonthValue, rate, trend } = values;
  const color =
    trend === "up" ? "#00783e" : trend === "down" ? "#bf0e08" : "#37248f";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        color: "#3f4c5e",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          color: { color },
        }}
      >
        {trend === "up" ? (
          <ArrowDropUpRoundedIcon sx={{ fontSize: "32px", fontWeight: 900 }} />
        ) : (
          <ArrowDropDownRoundedIcon
            sx={{ fontSize: "32px", fontWeight: 900 }}
          />
        )}
        <Typography sx={{ fontWeight: 600 }}>{`${rate}%`}</Typography>
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#234361",
          textTransform: "uppercase",
          marginBottom: "16px",
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: 500,
              color: "#234361",
            }}
          >
            {currentMonthValue}
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
            Current month
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            "&.MuiDivider-root": { borderColor: "#3f4c5e70", margin: "16px" },
          }}
        />
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: 500,
              color: "#234361",
            }}
          >
            {lastMonthValue}
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
            Last month
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const createData = ({ title, currentMonthValue, lastMonthValue, type }) => {
  let rate = (
    ((currentMonthValue - lastMonthValue) / lastMonthValue) *
    100
  ).toFixed(2);

  rate = type === "negative" || type === "minute" ? -rate : rate;

  const formatValue = (value) => {
    let formattedValue;
    switch (type) {
      case "minute":
        formattedValue = `${parseInt(value / 60)}:${(value % 60).toLocaleString(
          "en-US",
          { minimumIntegerDigits: 2, useGrouping: false }
        )}`;
        break;
      case "persentage":
        formattedValue = `${value}%`;
        break;
      default:
        formattedValue = value;
    }
    return formattedValue;
  };

  return {
    title,
    currentMonthValue: formatValue(currentMonthValue),
    lastMonthValue: formatValue(lastMonthValue),
    rate: rate,
    trend: rate > 0 ? "up" : rate < 0 ? "down" : "nutral",
  };
};

const productionData = [
  {
    title: "Production Volume",
    currentMonthValue: 10944,
    lastMonthValue: 9472,
    type: "posetive",
  },
  {
    title: "Waste",
    currentMonthValue: 512,
    lastMonthValue: 489,
    type: "negative",
  },
  {
    title: "Throughput",
    currentMonthValue: 96.4,
    lastMonthValue: 95.8,
    type: "persentage",
  },
];

const otherData = [
  {
    title: "Down Time",
    currentMonthValue: 1350,
    lastMonthValue: 1310,
    type: "minute",
  },
  {
    title: "Capacity Utilization",
    currentMonthValue: 90.1,
    lastMonthValue: 89.8,
    type: "persentage",
  },
  {
    title: "Recycle",
    currentMonthValue: 19256,
    lastMonthValue: 20433,
    type: "posetive",
  },
];

function Statics() {
  const pdata = productionData.map((d) => createData(d));
  const odata = otherData.map((d) => createData(d));
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        sx={{
          backgroundColor: "#fff",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {pdata.map((s, index) => (
          <React.Fragment>
            {index > 0 ? (
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  "&.MuiDivider-root": {
                    borderColor: "#3f4c5e40",
                    margin: "48px 16px",
                  },
                }}
              />
            ) : null}
            <Grid item flex={1}>
              <Card values={s} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <Divider
        variant="middle"
        flexItem
        sx={{
          "&.MuiDivider-root": {
            borderColor: "#3f4c5e20",
            margin: "16px 20vw",
          },
        }}
      />
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#fff",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        }}
      >
        {odata.map((s, index) => (
          <React.Fragment>
            {index > 0 ? (
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  "&.MuiDivider-root": {
                    borderColor: "#3f4c5e40",
                    margin: "48px 16px",
                  },
                }}
              />
            ) : null}
            <Grid item flex={1} sx={{ padding: "8px 16px" }}>
              <Card values={s} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default Statics;
