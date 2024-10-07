"use client";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { lifestyleScatterPlot as data } from "../../../../constants/graphData";

const LifestyleScatterplot = () => {
  return (
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 30, right: 30, bottom: 70, left: 70 }}
      xScale={{ type: "linear", min: 5, max: 9 }}
      xFormat=">-.2f"
      yScale={{ type: "linear", min: 0, max: 10 }}
      yFormat=">-.2f"
      blendMode="multiply"
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "paired" }}
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
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 3,
        tickPadding: 8,
        tickRotation: 0,
        legend: "Sleep Duration",
        legendPosition: "middle",
        legendOffset: 40,
        truncateTickAt: 0,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Sleep Quality",
        legendPosition: "middle",
        legendOffset: -45,
        truncateTickAt: 0,
      }}
      legends={[]}
    />
  );
};

export default LifestyleScatterplot;
