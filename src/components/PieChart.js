import { ResponsivePie } from "@nivo/pie";
import React from 'react'


const PieChart = ({ data }) => (
  <ResponsivePie
    colors={{ datum: "data.color" }}
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#5e6e82"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.7)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.7)",
        rotation: -45,
        lineWidth: 5,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "Oromiya 72 x 120 90 G",
        },
        id: "lines",
      },
      {
        match: {
          id: "Brown 72*120 90gm",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 6,
        itemWidth: 0,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 0,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#5e6e82",
            },
          },
        ],
      },
    ]}
  />
);

export default PieChart;
