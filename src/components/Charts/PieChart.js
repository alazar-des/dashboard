import { ResponsivePie } from "@nivo/pie";
import React from 'react'

const PieChart = ({ data, config }) => (
  <ResponsivePie
    colors={{ datum: "data.color" }}
    data={data}
    margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
    innerRadius={0.5}
    padAngle={0.75}
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
    {...config}
  />
);

export default PieChart;
