import React from "react";
// import card01 from "../../../assets/images/card01.jpg";
import card03 from "../../../assets/images/card03.png";
import carAdviser_logo from "../../../assets/images/car_advisers.webp";
import imagen_logo from "../../../assets/images/imagen_logo.jpg"
import urban_skillet_logo from "../../../assets/images/urban_skillet_logo.jpg"
import ball_cntrl_logo from "../../../assets/images/ball-contrl-logo.jpg"
import dashborad from "../../../assets/images/admin-dash-board.png"
import SmallButton from "../Buttons/SmallButton";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const projectsData = [
  {
    id: 1,
    image: carAdviser_logo,
    name: "CAR ADVISERS",
    tools: ["NEXT", "TypeScript", "RTK", "AWS"],
    about: "CAR ADVISERS – PAKISTAN’S LARGEST AUTOMOBILE MARKETPLACE",
    link: "https://www.caradvisers.com/",
    code: null,
    type:"large"
  },
  {
    id: 2,
    image: imagen_logo,
    name: "Imagen Network",
    tools: ["REACT", "JS", "MetaMask", "AI", "TailwindCSS"],
    about: "AI-powered social platform built for the Web3 era",
    link: "https://imagen.network/",
    code:null,
    type:"large"
  },
  {
    id: 3,
    name: "Ball Cntrl",
    image: ball_cntrl_logo,
    tools: ["REACT", "TailwindCSS", "Stripe",],
    about: "Women’s and girls’ football in England",
    link: "https://ballcontrl.com/",
    code: null,
    type:"large"
  },
  {
    id: 4,
    name: "Urban Skillet",
    image: urban_skillet_logo,
    tools: ["REACT", "JS", "CSS", "CMS"],
    about: "Halal burger restaurants in California",
    link: "https://example.com/kahoot",
    code: null,
    type:"large"
  },
  {
    id: 5,
    name: "Admin DashBoard",
    image: dashborad,
    tools: ["REACT", "JS", "CSS", "CMS"],
    about: "Admin Dashboard for bussniess management",
    link: "https://admin-dash-board-blue.vercel.app/",
    code: "https://github.com/ammad-amin-1999313/admin-dash-board",
    type:"large"
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
