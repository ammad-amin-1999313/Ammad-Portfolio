import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../Common/Cards/Card";
import { Link } from "react-router-dom";
import icon from "../../assets/images/project-icon.png";

const Project = ({type,width}) => {
  return (
    <div className="relative">
      <div className="absolute hidden xl:block bottom-40 right-0">
        <img src={icon} alt="" />
      </div>
      <div className=" size font-family px-6 md:px-20  xl:px-0 py-10">
        <div className="flex justify-between">
          <div className=" items-center gap-4">
            <div>
              <div className="text-[32px] flex font-medium  text-white">
                <span className="text-[#C778DD]">#</span>{" "}
                <h1 className="font-[font-family]">projects</h1>
              </div>
            </div>
            <div className="line hidden xl:block mt-2"></div>
          </div>
          <div
            style={{ borderRadius: "5px" }}
            className="flex text-[16px] text-white gap-2 border-2 px-2 border-transparent transition-all hover:duration-700 hover:ease-in-out hover:border-[#C778DD] items-center"
          >
            <Link to={"/project"}>
              <h4 className="text-xl ">view all</h4>
            </Link>
            <FaArrowRightLong color="white" />
          </div>
        </div>
        {/* ---------------projects */}
        <div>
          <Card onpage={type} layout={width} />
        </div>
      </div>
    </div>
  );
};

export default Project;
