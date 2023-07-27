import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import LineChart from "./Charts/LineChart";
import BarChart from "./Charts/BarChart";

import { FormControl, Select, MenuItem } from "@mui/material";
import Card from "./Card";

/*const data = [
  {
    date: "Mar 15, 2023",
    "Oromiya 72 x 120 90 G": 1104,
    "Oromiya 72*120 B/G 90gm": 859,
    "Brown 72*120 90gm": 2014,
  },
  {
    date: "Mar 16, 2023",
    "Brown 72*120 B/G 90gm": 1400,
    "Oromiya 72 x 120 90 G": 1090,
    "Oromiya 72*120 B/G 90gm": 1352,
  },
  {
    date: "Mar 17, 2023",
    "Brown 72*120 B/G 90gm": 1710,
    "Oromiya 72*120 B/G 90gm": 1530,
  },
  {
    date: "Mar 18, 2023",
    "Oromiya 72 x 120 90 G": 1653,
    "Brown 72*120 90gm": 2857,
  },
  {
    date: "Mar 19, 2023",
    "Brown 72*120 B/G 90gm": 2050,
    "Brown 72*120 90gm": 2285,
  },
  {
    date: "Mar 20, 2023",
    "Oromiya 72*120 B/G 90gm": 2394,
    "Brown 72*120 90gm": 2288,
  },
  {
    date: "Yesterday",
    "Oromiya 72 x 120 90 G": 2049,
    "Oromiya 72*120 B/G 90gm": 2055,
  },
];*/

const data = [
  {
    id: "Day Shift",
    color: "hsl(142, 70%, 50%)",
    data: [
      {
        x: "Mar 15, 2023",
        y: 20889,
      },
      {
        x: "Mar 16, 2023",
        y: 19996,
      },
      {
        x: "Mar 17, 2023",
        y: 17996,
      },
      {
        x: "Mar 18, 2023",
        y: 18754,
      },
      {
        x: "Mar 19, 2023",
        y: 21458,
      },
      {
        x: "Mar 20, 2023",
        y: 21096,
      },
      {
        x: "Yesterday",
        y: 22966,
      },
    ],
  },
  {
    id: "Neight Shift",
    color: "hsl(218, 70%, 50%)",
    data: [
      {
        x: "Mar 15, 2023",
        y: 22435,
      },
      {
        x: "Mar 16, 2023",
        y: 23588,
      },
      {
        x: "Mar 17, 2023",
        y: 21588,
      },
      {
        x: "Mar 18, 2023",
        y: 24896,
      },
      {
        x: "Mar 19, 2023",
        y: 19856,
      },
      {
        x: "Mar 20, 2023",
        y: 21096,
      },
      {
        x: "Yesterday",
        y: 24588,
      },
    ],
  },
  {
    id: "Day Waste",
    color: "hsl(62, 70%, 50%)",
    data: [
      {
        x: "Mar 15, 2023",
        y: 69,
      },
      {
        x: "Mar 16, 2023",
        y: 67,
      },
      {
        x: "Mar 17, 2023",
        y: 61,
      },
      {
        x: "Mar 18, 2023",
        y: 60,
      },
      {
        x: "Mar 19, 2023",
        y: 41,
      },
      {
        x: "Mar 20, 2023",
        y: 51,
      },
      {
        x: "Yesterday",
        y: 67,
      },
    ],
  },
  {
    id: "Night Waste",
    color: "hsl(325, 70%, 50%)",
    data: [
      {
        x: "Mar 15, 2023",
        y: 76,
      },
      {
        x: "Mar 16, 2023",
        y: 70,
      },
      {
        x: "Mar 17, 2023",
        y: 52,
      },
      {
        x: "Mar 18, 2023",
        y: 72,
      },
      {
        x: "Mar 19, 2023",
        y: 87,
      },
      {
        x: "Mar 20, 2023",
        y: 67,
      },
      {
        x: "Yesterday",
        y: 81,
      },
    ],
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
    date: "Mar 15, 2023",
    "Day shift": 20889,
    "Day shiftColor": "hsl(41, 70%, 50%)",
    "Day Waste": 69,
    "Day WasteColor": "hsl(329, 70%, 50%)",
    "Nigth Shift": 22435,
    "Nigth ShiftColor": "hsl(317, 70%, 50%)",
    "Night Waste": 76,
    "Night WasteColor": "hsl(329, 70%, 50%)",
  },
  {
    date: "Mar 16, 2023",
    "Day shift": 19996,
    "Day shiftColor": "hsl(41, 70%, 50%)",
    "Day Waste": 67,
    "Day WasteColor": "hsl(329, 70%, 50%)",
    "Nigth Shift": 23588,
    "Nigth ShiftColor": "hsl(317, 70%, 50%)",
    "Night Waste": 70,
    "Night WasteColor": "hsl(329, 70%, 50%)",
  },
  {
    date: "Mar 17, 2023",
    "Day shift": 17996,
    "Day shiftColor": "hsl(41, 70%, 50%)",
    "Day Waste": 61,
    "Day WasteColor": "hsl(329, 70%, 50%)",
    "Nigth Shift": 21588,
    "Nigth ShiftColor": "hsl(317, 70%, 50%)",
    "Night Waste": 52,
    "Night WasteColor": "hsl(329, 70%, 50%)",
  },
  {
    date: "Mar 18, 2023",
    "Day shift": 18754,
    "Day shiftColor": "hsl(41, 70%, 50%)",
    "Day Waste": 60,
    "Day WasteColor": "hsl(329, 70%, 50%)",
    "Nigth Shift": 24896,
    "Nigth ShiftColor": "hsl(317, 70%, 50%)",
    "Night Waste": 72,
    "Night WasteColor": "hsl(329, 70%, 50%)",
  },
  {
    date: "Mar 19, 2023",
    "Day shift": 21458,
    "Day shiftColor": "hsl(41, 70%, 50%)",
    "Day Waste": 51,
    "Day WasteColor": "hsl(329, 70%, 50%)",
    "Nigth Shift": 19856,
    "Nigth ShiftColor": "hsl(317, 70%, 50%)",
    "Night Waste": 87,
    "Night WasteColor": "hsl(329, 70%, 50%)",
  },
  {
    date: "Mar 20, 2023",
    "Day shift": 21096,
    "Day shiftColor": "hsl(41, 70%, 50%)",
    "Day Waste": 41,
    "Day WasteColor": "hsl(329, 70%, 50%)",
    "Nigth Shift": 20548,
    "Nigth ShiftColor": "hsl(317, 70%, 50%)",
    "Night Waste": 68,
    "Night WasteColor": "hsl(389, 40%, 70%)",
  },
  {
    date: "Yesterday",
    "Day shift": 22996,
    "Day shiftColor": "hsl(255, 70%, 50%)",
    "Day Waste": 67,
    "Day WasteColor": "hsl(62, 70%, 50%)",
    "Nigth Shift": 24588,
    "Nigth ShiftColor": "hsl(317, 70%, 50%)",
    "Night Waste": 81,
    "Night WasteColor": "hsl(223, 70%, 50%)",
  },
];

const dailyKeys = ["Day shift", "Day Waste", "Nigth Shift", "Night Waste"];

function ProductionStatics() {
  const [display, setDisplay] = React.useState("all");

  const handleChange = (event) => {
    setDisplay(event.target.value);
  };

  const colors = {
    "Day shift": "#47B881",
    "Day Waste": "#7CCDA7",
    "Nigth Shift": "#7266B1",
    "Night Waste": "#9C8DDE",
  };

  const getColor = (bar) => colors[bar.id];

  return (
    <Card style={{ height: 400, paddingBottom: "40px" }}>
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
          Last 7 days production statics
        </Typography>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            "&. MuiFormControl-root": {
              border: "none",
            },
          }}
          size="small"
        >
          <Select
            value={display}
            onChange={handleChange}
            sx={{
              "& .MuiInputBase-input": {
                color: "#425a70",
                borderRadius: 3,
                fontSize: 12,
                padding: "4px 26px 4px 12px",
              },
            }}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"day"}>Day Shift</MenuItem>
            <MenuItem value={"night"}>Night Shift</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/*<LineChart data={data} />*/}
      {display === "all" ? (
        <BarChart
          data={dailyData}
          keys={dailyKeys}
          groupMode={"grouped"}
          enableLabel={false}
          colors={getColor}
        />
      ) : (
        <BarChart
          data={dailyData}
          keys={dailyKeys}
          groupMode={"stacked"}
          enableLabel={true}
          colors={getColor}
        />
      )}
    </Card>
  );
}

export default ProductionStatics;
