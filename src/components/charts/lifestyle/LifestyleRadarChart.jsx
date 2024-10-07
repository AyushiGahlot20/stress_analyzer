"use client";
import { ResponsiveRadar } from "@nivo/radar";
import { lifestyleRadarData as data } from "../../../../constants/graphData";

const LifestyleRadarChart = () => {
  return (
    <ResponsiveRadar
      data={data}
      keys={["Insomnia", "Sleep Apnea", "No Disorder"]}
      indexBy="condition"
      maxValue={80}
      valueFormat=">-.2f"
      margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
      borderColor={{ from: "color" }}
      gridShape="linear"
      gridLabelOffset={26}
      gridLevels={0}
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
      enableDots={false}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "paired" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LifestyleRadarChart;
