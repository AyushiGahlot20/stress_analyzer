"use client";
import { ResponsivePie } from "@nivo/pie";
import { lifestylePieData as data } from "../../../../constants/graphData";

const LifePieChart = () => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.8}
      padAngle={0.7}
      cornerRadius={1}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "paired" }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0"]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", "2"]],
      }}
      legends={[]}
    />
  );
};

export default LifePieChart;
