"use client";
import { ResponsiveBar } from "@nivo/bar";
import { healthGenderDisorderData as data } from "../../../../constants/graphData";

const HealthCountChart = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["Male", "Female"]}
      indexBy="Disorder"
      margin={{ top: 30, right: 0, bottom: 60, left: 70 }}
      padding={0.3}
      maxValue={140}
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
      groupMode="grouped"
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
        tickSize: 4,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Sleep Disorder",
        legendPosition: "middle",
        legendOffset: 40,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Count",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
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

export default HealthCountChart;
