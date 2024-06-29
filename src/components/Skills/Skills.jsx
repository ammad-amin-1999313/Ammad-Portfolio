import React from "react";
import skill from "../../assets/images/skills.png";
import skills from "../Common/Skill/SkillsData";
const Skills = () => {
  return (
    <div className="">
    
      <div className=" size px-6 md:px-20 xl:px-0 pb-10">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-[32px] flex font-medium  text-white">
              <span className="text-[#C778DD]">#</span>{" "}
              <h1 className="font-family">skills</h1>
            </div>
          </div>
          <div className="line-skills hidden xl:block mt-2"></div>
        </div>
        {/* ------- */}
        <div className="flex flex-col xl:flex-row justify-between pt-2">
            <div>
                <img src={skill} alt="skills" />
            </div>
            <div className="flex flex-wrap pt-10 xl:pt-0 gap-4 xl:w-[55%]" >
                {skills.map((skill,index) => (
                    <div className="border-[1px]  font-family  transition-all duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out  xl:w-[30%] h-[100px]" key={index} >
                        <h1 className="border-b font-semibold  text-white pl-2" >{skill.name}</h1>
                        <h1 className="px-2 text-gray-400 pt-4 xl:pt-0 content-center " >{skill.paragraph}</h1>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
