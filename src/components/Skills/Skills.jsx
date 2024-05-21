import React from "react";
import skill from "../../assets/images/skills.png";
import skills from "../Common/Skill/SkillsData";

const Skills = () => {
  return (
    <div>
      <div className=" size pb-10">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-[32px] flex font-medium  text-white">
              <span className="text-[#C778DD]">#</span>{" "}
              <h1 className="font-[font-family]">skills</h1>
            </div>
          </div>
          <div className="line-skills mt-2"></div>
        </div>
        {/* ------- */}
        <div className="flex justify-between pt-2">
            <div>
                <img src={skill} alt="skills" />
            </div>
            <div className="flex flex-wrap gap-4 w-[55%]" >
                {skills.map((skill,index) => (
                    <div className="border-[1px] skill-hover hover:transition-all hover:duration-700 hover:ease-in-out  w-[30%] h-[100px]" key={index} >
                        <h1 className="border-b  text-white pl-2" >{skill.name}</h1>
                        <h1 className="px-2 text-gray-400 " >{skill.paragraph}</h1>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
