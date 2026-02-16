import React from "react";
import SmallButton from "../Buttons/SmallButton";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { projectsData } from "../../../utils/projectsData";

const Card = ({ onpage, layout = "large", data, clamp = false }) => {
  const displayedProjects = data
    ? data
    : onpage === "home"
    ? projectsData.slice(0, 3)
    : projectsData;

  // STRICT WIDTH LOGIC
  const widthClass = layout === "small" ? "lg:w-[32%]" : "lg:w-[48%]";

  // ✅ Clamp rules (home should be compact)
  const clampClass =
    onpage === "home"
      ? "line-clamp-2"
      : clamp
      ? "line-clamp-3"
      : "";

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap pt-8 gap-6 justify-between text-white">
      {displayedProjects.map((project) => (
        <div
          key={project.id}
          className={`group flex flex-col w-full ${widthClass} cards border-2 border-white/15 transition-all duration-300 hover:border-[#C778DD]`}
        >
          {/* Image */}
          <div className="w-full aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Tools */}
          <h2 className="border-b border-white/10 px-3 py-2 transition-colors duration-300 group-hover:border-[#C778DD] text-gray-400 text-sm">
            {project.tools.join("  ")}
          </h2>

          {/* Content */}
          <div className="flex flex-col flex-grow p-4">
            <h2 className="pb-3 text-2xl font-medium">{project.name}</h2>

            <p className={`text-gray-400 leading-relaxed ${clampClass}`}>
              {project.about}
            </p>

            {/* Optional helper text only for projects page when clamped */}
            {clamp && onpage !== "home" && (
              <span className="text-xs text-[#C778DD] mt-3 opacity-80">
                Tip: open Live for full details
              </span>
            )}
          </div>

          {/* Buttons */}
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
