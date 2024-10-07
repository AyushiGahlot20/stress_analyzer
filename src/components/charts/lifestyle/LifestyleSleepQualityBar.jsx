"use client";
import { ResponsiveBar } from "@nivo/bar";
import { lifestyleSleepQualityBarData as data } from "../../../../constants/graphData";

const LifestyleSleepQualityBar = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["Sleep Quality", "Stress Level"]}
      indexBy="occupation"
      margin={{ top: 0, right: 20, bottom: 70, left: 20 }}
      padding={0.3}
      maxValue={10}
      minValue={0}
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
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Occupation",
        legendPosition: "middle",
        legendOffset: 40,
        truncateTickAt: 3,
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

export default LifestyleSleepQualityBar;
