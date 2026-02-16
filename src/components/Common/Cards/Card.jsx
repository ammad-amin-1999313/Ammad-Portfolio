import React from "react";
import SmallButton from "../Buttons/SmallButton";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { projectsData } from "../../../utils/projectsData";

const Card = ({ onpage, layout = "large" }) => {
  // const wordSize = (str, maxLength) => {
  //   return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  // };

  const displayedProjects =
    onpage === "home" ? projectsData.slice(0, 3) : projectsData;

  // STRICT WIDTH LOGIC
  const widthClass = layout === "small" ? "lg:w-[32%]" : "lg:w-[48%]";

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap pt-8 gap-y-10 gap-x-2 justify-between text-white">
      {displayedProjects.map((project) => (
        <div
          key={project.id}
          className={`group flex flex-col w-full ${widthClass} cards border-2 border-white transition-all duration-500 ease-in-out hover:border-[#C778DD]`}
        >
          {/* Image Section */}
          <div className="w-full aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Tools Section */}
          <h2 className="border-b-[1px] px-2 py-2 transition-colors duration-500 group-hover:border-[#C778DD] text-gray-400">
            {project.tools.join("  ")}
          </h2>

          {/* Content Section */}
          <div className="flex flex-col flex-grow p-4">
            <h2 className="pb-3 text-2xl font-medium">
              {project.name }
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {project.about}
            </p>
          </div>

          {/* Button Section */}
          <div className="flex gap-4 px-4 pb-4 mt-auto">
            <SmallButton
              className="border-2 border-[#C778DD] hover-bg-transition flex items-center gap-2"
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              Live <AiOutlineDeliveredProcedure />
            </SmallButton>

            <SmallButton
              className={`border-2 ${
                project.code
                  ? "border-[#C778DD] hover-bg-transition"
                  : "border-gray-500 cursor-not-allowed text-gray-500"
              } flex items-center gap-2`}
              onClick={() => project.code && window.open(project.code, "_blank")}
              disabled={!project.code}
            >
              GitHub
            </SmallButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;