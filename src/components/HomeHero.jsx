import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const HomeHero = () => {
  return (
    <div className="bg-[#313866] h-screen pl-36 py-16 flex flex-col items-start gap-5">
      <div className="flex items-center">
        <div className="space-y-5 w-[50%] text-white">
          <h1 className="text-5xl w-full font-bold text mb-10">
            Stress Analyzer{" "}
          </h1>

          <p className="text-gray-300">
            {" "}
            This project was made to contribute to the field of mental health by
            offering a tool that can potentially assist individuals in
            recognizing and managing stress more effectively. The amalgamation
            of machine learning and stress prediction holds promise in not only
            early detection but also in tailored interventions, thereby
            fostering a proactive approach to mental well-being.
          </p>
          <div className="text-gray-300 leading-8">
            <h1 className="text-lg font-semibold mb-2">
              Final Year Project By:
            </h1>
            <p>Ayushi Gahlot</p>
            <p>Gowrish Chhabra</p>
            <p>Yukta</p>
          </div>
        </div>
        <Image
          className="w-[60%]"
          src="/mentalHealth.png"
          width={800}
          height={100}
        />
      </div>

      <div className="flex flex-col items-center gap-10 ml-12">
        <h1 className="text-white font-bold text-2xl">Technology Used</h1>
        <div className="flex gap-20 text-white items-center">
          <SiNextdotjs size={50} title="Next.js" />
          <FaReact size={50} title="React.js" />
          <div className="text-lg leading-5">
            <p>Machine</p>
            <p>Learning</p>
          </div>
          <FaPython size={50} title="Python" />
          <SiStreamlit size={50} title="Streamlit" />
          <IoLogoJavascript size={50} title="Javascript" />
          <SiTailwindcss size={50} title="Tailwind CSS" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
