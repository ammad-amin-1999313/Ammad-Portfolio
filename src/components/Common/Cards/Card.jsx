import React from "react";
import card01 from "../../../assets/images/card01.jpg";
import card03 from "../../../assets/images/card03.png";
import carAdviser_logo from "../../../assets/images/car_advisers.webp";
import SmallButton from "../Buttons/SmallButton";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const projectsData = [
  {
    id: 1,
    image: carAdviser_logo,
    name: "CAR ADVISERS",
    tools: ["NEXTJS", "TypeScript", "RTK", "AWS"],
    about: "CAR ADVISERS – PAKISTAN’S LARGEST AUTOMOBILE MARKETPLACE",
    link: "https://www.caradvisers.com/",
    code: null,
  },
  {
    id: 2,
    image: card03,
    name: "ProtectX",
    tools: ["HTML", "SCSS", "Python", "React"],
    about: "Discord anti-crash bot",
    link: "https://imagen.network/",
    code: "https://github.com/username/protectx",
  },
  {
    id: 3,
    name: "Kahoot Answers Viewer",
    image: card03,
    tools: ["HTML", "SCSS", "Python", "React"],
    about: "Get answers to your kahoot quiz",
    link: "https://example.com/kahoot",
    code: null,
  },
  {
    id: 4,
    name: "Kahoot Answers Viewer",
    image: card03,
    tools: ["HTML", "SCSS", "Python", "React"],
    about: "Get answers to your kahoot quiz",
    link: "https://example.com/kahoot",
    code: null,
  },
];

const Card = ({onpage}) => {
  const wordSize = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
 const displayedProjects =
    onpage === "home" ? projectsData.slice(0, 3) : projectsData;
    console.log("on page",onpage);
    
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap pt-8 justify-between text-white">
      {displayedProjects.map((project) => (
        <div
          key={project.id}
          className="group xl:w-[28%] cards border-2 mb-6 border-white transition-all duration-500 ease-in-out hover:border-[#C778DD]"
        >
          <div className="w-[332.8px] h-[203.09px] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={project.image}
              alt={project.name}
            />
          </div>

          <h2 className="border-b-[1px] px-2 py-2 transition-colors duration-500 group-hover:border-[#C778DD]">
            {project.tools.join("  ")}
          </h2>

          <h2 className="py-3 px-4 text-2xl font-medium">
            {wordSize(project.name, 15)}
          </h2>
          <p className="px-4">{project.about}</p>

          <div className="flex gap-4 px-4 py-4">
            {/* Live Button */}
            <SmallButton
              className="border-2 border-[#C778DD] hover-bg-transition flex items-center gap-2"
              onClick={() =>
                project.link && window.open(project.link, "_blank")
              }
            >
              Live <AiOutlineDeliveredProcedure />
            </SmallButton>

            {/* GitHub Button */}
            <SmallButton
              className={`border-2 ${
                project.code
                  ? "border-[#C778DD] hover-bg-transition"
                  : "border-gray-500 cursor-not-allowed"
              } flex items-center gap-2`}
              onClick={() =>
                project.code && window.open(project.code, "_blank")
              }
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
