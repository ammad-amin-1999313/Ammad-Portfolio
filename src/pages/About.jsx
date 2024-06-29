import React from "react";
import skillframe from "../assets/images/project-icon.png";
import abouticon from "../assets/images/aboutGroup.png";
import skills from "../components/Common/Skill/SkillsData";
import skillicon from "../assets/images/skills-frame.png";
import { funFact } from "../utils/commonItems";
import abouticons from '../assets/images/aboutpage.png'
const About = () => {
  return (
    <div className="relative px-6 md:px-20 xl:px-0 pt-10">
      <div className="absolute hidden xl:block top-40 right-0">
        <img src={skillframe} alt="" />
      </div>
      <div className="absolute bottom-20 right-0">
        <img src={skillicon} alt="" />
      </div>
      <div className="size">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-[32px] flex font-medium  text-white">
              <span className="text-[#C778DD]">/</span>{" "}
              <h1 className="font-family">about-me</h1>
            </div>
            <p className="text-white font-family">Who am i?</p>
          </div>
        </div>
        {/* ---------- */}
        <div className="pt-14">
          <div className="flex flex-col lg:flex-row justify-between pb-10">
            <div className="text-gray-400  lg:w-[52%] ">
              <p className="pt-6 font-family" style={{ lineHeight: "26px" }}>
                Hello, i’m Ammad!
              </p>
              <p className="pt-6 font-family " style={{ lineHeight: "26px" }}>
                I’m a self-taught front-end developer based in Islamabad,
                Pakistan. I can develop responsive websites from scratch and
                raise them into modern user-friendly web experiences.{" "}
              </p>
              <p
                className="pt-6 pb-6 font-family"
                style={{ lineHeight: "26px" }}
              >
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p>
            </div>
            <div className="lg:mt-[-42px]">
              <img src={abouticon} alt="" />
            </div>
          </div>
        </div>
        {/* ----------------- */}
        <div className="text-[32px] py-10 flex font-medium  text-white">
          <span className="text-[#C778DD]">#</span>{" "}
          <h1 className="font-family">skills</h1>
        </div>
        {/* ----------- */}
        <div className="flex flex-wrap gap-4 pb-10 ">
          {skills.map((skill, index) => (
            <div
              className="border-[1px] font-family   lg:w-[30%] h-[80px] lg:h-[100px]"
              key={index}
            >
              <h1 className="border-b font-semibold  text-white pl-2">
                {skill.name}
              </h1>
              <h1 className="px-2 pt-4  text-gray-400 ">{skill.paragraph}</h1>
            </div>
          ))}
        </div>
        {/* --------- */}
        <div>
          <div className="text-[32px] py-10  font-medium  text-white">
            <div className="flex">
              <span className="text-[#C778DD]">#</span>{" "}
              <h1 className="font-family">my-fun-facts</h1>
            </div>

           <div className="flex-col lg:flex-row  font-family justify-between pb-10">
           <div className="lg:w-[80%] gap-4 flex mt-10 flex-wrap">
              <p className="text-[18px] text-gray-400 lg:w-[38%] py-1 px-[6px] border-2 border-[#abb2bf]">
                {funFact[0].fun}
              </p>
              <p className="text-[18px] text-gray-400 lg:w-[34%] py-1 px-[6px] border-[#abb2bf]  border-2">
                {funFact[1].fun}
              </p>
              <p className="text-[18px] text-gray-400 border-2 py-1 px-[6px] border-[#abb2bf] lg:w-[27%]">
                {funFact[2].fun}
              </p>
              <p className="text-[18px] text-gray-400 border-2 lg:w-[41%] py-1 border-[#abb2bf] px-[6px]">
                {funFact[3].fun}
              </p>
              <p className="text-[18px] text-gray-400 border-2 py-1 px-[6px] border-[#abb2bf] lg:w-[44%]">
                {funFact[4].fun}
              </p>
              <p className="border-2 text-gray-400 text-[18px] lg:w-[27%] py-1 border-[#abb2bf] px-[6px]">
                {funFact[5].fun}
              </p>
              <p className="text-[18px] text-gray-400 border-2 py-1 px-[6px] border-[#abb2bf] lg:w-[33%]">
                {funFact[6].fun}
              </p>
            </div>
            <div className="  mt-10 mr-20">
              <img src={abouticons} alt="" />
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
