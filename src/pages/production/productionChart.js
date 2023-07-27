import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BarChart from "../../components/Charts/BarChart";
import Select from "../../components/UI/Select";
import Card from "../../components/Card";

const data = [
  {
    date: "Mar 15",
    "Oromiya 72 x 120 90 G": 1104,
    "Oromiya 72*120 B/G 90gm": 859,
    "Brown 72*120 90gm": 2014,
  },
  {
    date: "Mar 16",
    "Brown 72*120 B/G 90gm": 1400,
    "Oromiya 72 x 120 90 G": 1090,
    "Oromiya 72*120 B/G 90gm": 1352,
  },
  {
    date: "Mar 17",
    "Brown 72*120 B/G 90gm": 1710,
    "Oromiya 72*120 B/G 90gm": 1530,
  },
  {
    date: "Mar 18",
    "Oromiya 72 x 120 90 G": 1653,
    "Brown 72*120 90gm": 2857,
  },
  {
    date: "Mar 19",
    "Brown 72*120 B/G 90gm": 2050,
    "Brown 72*120 90gm": 2285,
  },
  {
    date: "Mar 20",
    "Oromiya 72*120 B/G 90gm": 2394,
    "Brown 72*120 90gm": 2288,
  },
  {
    date: "Mar 21",
    "Oromiya 72 x 120 90 G": 2049,
    "Oromiya 72*120 B/G 90gm": 2055,
  },
  {
    date: "Mar 22",
    "Oromiya 72 x 120 90 G": 1104,
    "Oromiya 72*120 B/G 90gm": 859,
    "Brown 72*120 90gm": 2014,
  },
  {
    date: "Mar 23",
    "Brown 72*120 B/G 90gm": 1400,
    "Oromiya 72 x 120 90 G": 1090,
    "Oromiya 72*120 B/G 90gm": 1352,
  },
  {
    date: "Mar 24",
    "Brown 72*120 B/G 90gm": 1710,
    "Oromiya 72*120 B/G 90gm": 1530,
  },
  {
    date: "Mar 25",
    "Oromiya 72 x 120 90 G": 1653,
    "Brown 72*120 90gm": 2857,
  },
  {
    date: "Mar 26",
    "Brown 72*120 B/G 90gm": 2050,
    "Brown 72*120 90gm": 2285,
  },
  {
    date: "Mar 27",
    "Oromiya 72*120 B/G 90gm": 2394,
    "Brown 72*120 90gm": 2288,
  },
  {
    date: "Mar 28",
    "Oromiya 72 x 120 90 G": 2049,
    "Oromiya 72*120 B/G 90gm": 2055,
  },
  {
    date: "Mar 29",
    "Oromiya 72 x 120 90 G": 1104,
    "Oromiya 72*120 B/G 90gm": 859,
    "Brown 72*120 90gm": 2014,
  },
  {
    date: "Mar 30",
    "Brown 72*120 B/G 90gm": 1400,
    "Oromiya 72 x 120 90 G": 1090,
    "Oromiya 72*120 B/G 90gm": 1352,
  },
  {
    date: "May 1",
    "Brown 72*120 B/G 90gm": 1710,
    "Oromiya 72*120 B/G 90gm": 1530,
  },
  {
    date: "May 2",
    "Oromiya 72 x 120 90 G": 1653,
    "Brown 72*120 90gm": 2857,
  },
  {
    date: "May 3",
    "Brown 72*120 B/G 90gm": 2050,
    "Brown 72*120 90gm": 2285,
  },
  {
    date: "May 4",
    "Oromiya 72*120 B/G 90gm": 2394,
    "Brown 72*120 90gm": 2288,
  },
  {
    date: "May 5",
    "Oromiya 72 x 120 90 G": 2049,
    "Oromiya 72*120 B/G 90gm": 2055,
  },
  {
    date: "May 6",
    "Oromiya 72 x 120 90 G": 1104,
    "Oromiya 72*120 B/G 90gm": 859,
    "Brown 72*120 90gm": 2014,
  },
  {
    date: "May 7",
    "Brown 72*120 B/G 90gm": 1400,
    "Oromiya 72 x 120 90 G": 1090,
    "Oromiya 72*120 B/G 90gm": 1352,
  },
  {
    date: "May 8",
    "Brown 72*120 B/G 90gm": 1710,
    "Oromiya 72*120 B/G 90gm": 1530,
  },
  {
    date: "May 9",
    "Oromiya 72 x 120 90 G": 1653,
    "Brown 72*120 90gm": 2857,
  },
  {
    date: "May 10",
    "Brown 72*120 B/G 90gm": 2050,
    "Brown 72*120 90gm": 2285,
  },
  {
    date: "May 11",
    "Oromiya 72*120 B/G 90gm": 2394,
    "Brown 72*120 90gm": 2288,
  },
  {
    date: "May 12",
    "Oromiya 72 x 120 90 G": 2049,
    "Oromiya 72*120 B/G 90gm": 2055,
  },
];

const keys = [
  "Brown 72*120 B/G 90gm",
  "Oromiya 72 x 120 90 G",
  "Oromiya 72*120 B/G 90gm",
  "Brown 72*120 90gm",
];

const dailyData = [
  {
    date: "Mar 15",
    "Day shift": 20889,
    "Nigth Shift": 22435,
  },
  {
    date: "Mar 16",
    "Day shift": 19996,
    "Nigth Shift": 23588,
  },
  {
    date: "Mar 17",
    "Day shift": 17996,
    "Nigth Shift": 21588,
  },
  {
    date: "Mar 18",
    "Day shift": 18754,
    "Nigth Shift": 24896,
  },
  {
    date: "Mar 19",
    "Day shift": 21458,
    "Nigth Shift": 19856,
  },
  {
    date: "Mar 20",
    "Day shift": 21096,
    "Nigth Shift": 20548,
  },
  {
    date: "Mar 21",
    "Day shift": 22996,
    "Nigth Shift": 24588,
  },
  {
    date: "Mar 22",
    "Day shift": 20889,
    "Nigth Shift": 22435,
  },
  {
    date: "Mar 23",
    "Day shift": 19996,
    "Nigth Shift": 23588,
  },
  {
    date: "Mar 24",
    "Day shift": 17996,
    "Nigth Shift": 21588,
  },
  {
    date: "Mar 25",
    "Day shift": 18754,
    "Nigth Shift": 24896,
  },
  {
    date: "Mar 26",
    "Day shift": 21458,
    "Nigth Shift": 19856,
  },
  {
    date: "Mar 27",
    "Day shift": 21096,
    "Nigth Shift": 20548,
  },
  {
    date: "Mar 28",
    "Day shift": 22996,
    "Nigth Shift": 24588,
  },
  {
    date: "Mar 29",
    "Day shift": 20889,
    "Nigth Shift": 22435,
  },
  {
    date: "Mar 30",
    "Day shift": 19996,
    "Nigth Shift": 23588,
  },
  {
    date: "May 1",
    "Day shift": 17996,
    "Nigth Shift": 21588,
  },
  {
    date: "May 2",
    "Day shift": 18754,
    "Nigth Shift": 24896,
  },
  {
    date: "May 3",
    "Day shift": 21458,
    "Nigth Shift": 19856,
  },
  {
    date: "May 4",
    "Day shift": 21096,
    "Nigth Shift": 20548,
  },
  {
    date: "May 5",
    "Day shift": 22996,
    "Nigth Shift": 24588,
  },
  {
    date: "May 6",
    "Day shift": 22996,
    "Nigth Shift": 24588,
  },
  {
    date: "May 7",
    "Day shift": 20889,
    "Nigth Shift": 22435,
  },
  {
    date: "May 8",
    "Day shift": 19996,
    "Nigth Shift": 23588,
  },
  {
    date: "May 9",
    "Day shift": 17996,
    "Nigth Shift": 21588,
  },
  {
    date: "May 10",
    "Day shift": 18754,
    "Nigth Shift": 24896,
  },
  {
    date: "May 11",
    "Day shift": 21458,
    "Nigth Shift": 19856,
  },
  {
    date: "May 12",
    "Day shift": 21096,
    "Nigth Shift": 20548,
  },
  {
    date: "May 13",
    "Day shift": 22996,
    "Nigth Shift": 24588,
  },
  {
    date: "May 14",
    "Day shift": 22996,
    "Nigth Shift": 24588,
  },
];

const dailyKeys = ["Day shift", "Nigth Shift"];

const productionTypes = ["Production", "Recycle", "Down Time"]
const periods = ["Daily", "Weekly", "Monthly", "Yearly"]
const shifts = ["Day Shift", "Neight Shift"]

function ProductionCharts() {
  const [shift, setShift] = React.useState("");
  const [production, setproduction] = React.useState("Production");
  const [period, setperiod] = React.useState("Daily")

  const dailyColors = {
    "Day shift": "#47B881",
    "Day Waste": "#7CCDA7",
    "Nigth Shift": "#7266B1",
    "Night Waste": "#9C8DDE",
  };

  const productColors = {
    "Oromiya 72 x 120 90 G": "#47B881",
    "Oromiya 72*120 B/G 90gm": "#7CCDA7",
    "Brown 72*120 90gm": "#7266B1",
    "Brown 72*120 B/G 90gm": "#9C8DDE",
  };

  const getColor = (bar) => dailyColors[bar.id];
  const getProductColor = (bar) => productColors[bar.id];

  return (
    <Card style={{ height: 450, paddingBottom: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Typography variant="h6" mb={1} color="#344050">
          Last 30 days production statics
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Select
            name="production"
            label="Type"
            options={productionTypes}
            state={[production, setproduction]}
          />
          <Select
            name="period"
            label="Period"
            options={periods}
            state={[period, setperiod]}
          />
          <Select
            name="shift"
            label="Shift"
            options={shifts}
            state={[shift, setShift]}
          />
        </Box>
      </Box>
      {/*<LineChart data={data} />*/}
      {shift === "" ? (
        <BarChart
          data={dailyData}
          keys={dailyKeys}
          groupMode={"grouped"}
          enableLabel={false}
          colors={getColor}
        />
      ) : (
        <BarChart
          data={data}
          keys={keys}
          groupMode={"stacked"}
          enableLabel={false}
          colors={getProductColor}
        />
      )}
    </Card>
  );
}

export default ProductionCharts;
