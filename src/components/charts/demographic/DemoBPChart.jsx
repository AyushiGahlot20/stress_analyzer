"use client";
import { ResponsiveBar } from "@nivo/bar";
import { demoBPdata as data } from "../../../../constants/graphData";

const DemoBPChart = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["Low Blood Pressure", "High Blood Pressure"]}
      indexBy="id"
      margin={{ top: 30, right: 20, bottom: 60, left: 20 }}
      padding={0.3}
      minValue={0}
      maxValue={233}
      theme={{
        axis: {
          legend: {
            text: {
              fill: "white",
            },
          },
          ticks: {
            text: {
              fill: "white",
            },
          },
        },
      }}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "paired" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Blood Pressure",
        legendPosition: "middle",
        legendOffset: 40,
        truncateTickAt: 10,
      }}
      axisLeft={null}
      enableGridY={false}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default DemoBPChart;
