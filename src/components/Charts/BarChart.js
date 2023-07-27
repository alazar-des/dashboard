import { ResponsiveBar } from "@nivo/bar";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

const BarChart = ({ data, keys, groupMode, enableLabel, colors }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const legend = matches
    ? [
        {
          dataFrom: "keys",
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 90,
          itemsSpacing: 0,
          itemWidth: 160,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 12,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]
    : [];

  const margin = matches
    ? { top: 50, right: 0, bottom: 90, left: 60 }
    : { top: 50, right: 0, bottom: 30, left: 60 };

  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy="date"
      margin={margin}
      groupMode={groupMode}
      enableLabel={enableLabel}
      padding={0.4}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={colors}
      borderColor={{
        from: "color",
        modifiers: [["darker", 3]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: "Date",
        legendPosition: "middle",
        legendOffset: 60,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Loom Production",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 3]],
      }}
      legends={legend}
      role="application"
      ariaLabel="Nivo bar chart"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
