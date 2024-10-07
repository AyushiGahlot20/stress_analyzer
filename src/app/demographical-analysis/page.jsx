import DemoBPChart from "@/components/charts/demographic/DemoBPChart";
import DemoBarChart from "@/components/charts/demographic/DemoBarChart";
import DemoOccupationChart from "@/components/charts/demographic/DemoOccupationChart";
import DemoPieChart from "@/components/charts/demographic/DemoPieChart";

const Demographic = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="font-bold text-2xl ml-10 mt-10 text-white">
        Demographical Analysis
      </h1>

      <div className="m-10 flex flex-col gap-10">
        <div id="top" className="flex gap-10">
          <div className="h-72 w-[40%] bg-[#232D3F]">
            <DemoBarChart />
          </div>

          <div className="w-[30%] space-y-10">
            <div className="bg-[#232D3F] h-[43.7%] flex flex-col items-center justify-center gap-4">
              <p className="text-white text-xl font-medium">Male Age</p>
              <p className="text-[#A6CEE3] text-3xl font-bold">37</p>
            </div>

            <div className="bg-[#232D3F] h-[43.7%] flex flex-col items-center justify-center gap-4">
              <p className="text-white text-xl font-medium">Female Age</p>
              <p className="text-[#A6CEE3] text-3xl font-bold">47</p>
            </div>
          </div>

          <div className="h-72 w-[30%] bg-[#232D3F] relative">
            <DemoPieChart />
            <p className="absolute bottom-5 left-24 text-lg font-medium text-white">
              Average Stress Level
            </p>
          </div>
        </div>

        <div id="bottom" className="flex gap-10">
          <div className="h-72 w-[60%] bg-[#232D3F]">
            <DemoBPChart />
          </div>
          <div className="h-72 w-[40%] bg-[#232D3F] ">
            <DemoOccupationChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographic;
