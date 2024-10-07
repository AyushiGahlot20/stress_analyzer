import HealthBarChart from "@/components/charts/health/HealthBarChart";
import HealthCountChart from "@/components/charts/health/HealthCountChart";
import HealthDisorderChart from "@/components/charts/health/HealthDisorderChart";
import HealthPieChart from "@/components/charts/health/HealthPieChart";
import HealthScatterPlot from "@/components/charts/health/HealthScatterPlot";

const Health = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl ml-10 mt-10 text-white">
        Health Analysis
      </h1>
      <div className="m-10 flex flex-col gap-10">
        <div id="top" className="flex gap-10">
          <div className="h-72 w-[40%] bg-[#232D3F]">
            <HealthScatterPlot />
          </div>
          <div className="h-72 w-[50%] bg-[#232D3F]">
            <HealthBarChart />
          </div>
          <div className="h-72 w-[18%]  space-y-5">
            <div className="h-[46.8%] bg-[#232D3F] flex flex-col items-center justify-center gap-4">
              <div className="text-white text-xl font-medium">Male</div>
              <div className="text-[#A6CEE3] text-3xl font-bold">6.08</div>
            </div>
            <div className="h-[46.8%] bg-[#232D3F] flex flex-col items-center justify-center gap-4">
              <div className="text-white text-xl font-medium">Female</div>
              <div className="text-[#A6CEE3] text-3xl font-bold">4.68</div>
            </div>
          </div>
        </div>
        <div id="bottom" className="flex gap-10">
          <div className="h-72 w-[40%] bg-[#232D3F]">
            <HealthCountChart />
          </div>
          <div className="h-72 w-[35%] bg-[#232D3F]">
            <HealthDisorderChart />
          </div>
          <div className="h-72 w-[25%] bg-[#232D3F]">
            <HealthPieChart />
            <div className="text-white -mt-20 ml-10 text-center w-[70%]">
              Average stress level based on disorders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
