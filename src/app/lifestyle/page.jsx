import LifePieChart from "@/components/charts/lifestyle/LifePieChart";
import LifestylePhysicalActivity from "@/components/charts/lifestyle/LifestylePhysicalActivity";
import LifestyleRadarChart from "@/components/charts/lifestyle/LifestyleRadarChart";
import LifestyleScatterplot from "@/components/charts/lifestyle/LifestyleScatterplot";
import LifestyleSleepQualityBar from "@/components/charts/lifestyle/LifestyleSleepQualityBar";

const Lifestyle = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl ml-10 mt-10 text-white">
        Lifestyle Analysis
      </h1>
      <div className="m-10 flex gap-10">
        <div id="left" className="flex flex-col gap-10 w-[70%]">
          <div id="left-top" className="flex gap-10">
            <div className="h-72 bg-[#232D3F] w-[50%]">
              <LifestyleSleepQualityBar />
            </div>
            <div className="h-72 bg-[#232D3F] w-[50%]">
              <LifestyleScatterplot />
            </div>
          </div>
          <div id="left-bottom" className="flex gap-10">
            <div className="h-72 bg-[#232D3F] w-[40%]">
              <LifePieChart /> 
              <p className="text-white text-lg -mt-14 ml-24">
                Quality of sleep
              </p>
            </div>
            <div className="h-72 bg-[#232D3F] w-[60%]">
              <LifestyleRadarChart />
            </div>
          </div>
        </div>
        <div id="right" className="bg-[#232D3F] w-[30%]">
          <LifestylePhysicalActivity />
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
