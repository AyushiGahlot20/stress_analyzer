"use client";
import { ResponsiveBar } from "@nivo/bar";
import { demoOccupationData as data } from "../../../../constants/graphData";

const DemoOccupationChart = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["Stress Level"]}
      indexBy="id"
      margin={{ top: 20, right: -50, bottom: 20, left: 140 }}
      padding={0.3}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: "white",
            },
          },
        },
      }}
      minValue={0}
      maxValue={10}
      layout="horizontal"
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
      borderRadius={7}
      borderColor="#fff"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -46,
        truncateTickAt: 0,
      }}
      enableGridY={false}
      enableLabel={false}
      enableTotals={true}
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

export default DemoOccupationChart;
