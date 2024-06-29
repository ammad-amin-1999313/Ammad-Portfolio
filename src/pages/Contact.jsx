import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import icons from "../assets/images/project-icon.png"


const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
    <div className="relative" >
    <div className="absolute hidden xl:block top-40 right-0">
      <img src={icons } alt="" />
    </div>
      <div className="size">
        <div>
          <div className="text-[32px] pt-10 flex font-medium px-6 md:px-20 xl:px-0 text-white">
            <span className="text-[#C778DD]">/</span>{" "}
            <h1 className="font-family">contact-me</h1>
          </div>
          <p className="text-white pt-3 px-6 md:px-20 xl:px-0 font-family">Who am i?</p>
        </div>
      {/* ---------- */}
      <div className="py-10 flex flex-col px-6 md:px-20 xl:px-0 lg:flex-row justify-between">
        <div className=" lg:w-[50%] text-white font-family">
          <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </div>
        <div className='border-[1px] mt-8 xl:mt-0 md:w-[50%] lg:w-auto font-family rounded transition-all duration-500 ease-in-out hover:border-[#C778DD] hover:transition-all hover:duration-500 hover:ease-in-out p-4 '>
                <h4 className='text-white'>Message me here</h4>
                <span 
              className='flex gap-2 text-gray-400 items-center pt-3 pb-2 cursor-pointer' 
              onClick={() => copyToClipboard('sardarammad6@gmail.com')}
            >
              <MdEmail /> sardarammad6@gmail.com
            </span>
            <span 
              className='flex gap-2 text-gray-400 items-center cursor-pointer' 
              onClick={() => copyToClipboard('Ammad Amin')}
            >
              <FaLinkedin/> Ammad Amin
            </span>
            </div>
      </div>
      {/* ---------------- */}
      <div className="text-[32px] px-6 md:px-20 xl:px-0 flex font-medium  text-white">
            <span className=" font-family text-[#C778DD]">#</span>{" "}
            <h1 className="font-family">all-media</h1>
          </div>
          <div className="flex pb-10 px-6 md:px-20 xl:px-0 pt-3 gap-8">
            <div className="flex items-center gap-1 text-gray-400" >
              <BsTwitter/> <span>_AmmadAmin</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400" >
              <FaGithub/> <span>ammad amin</span>
            </div>
          </div>
          {/* ----------------- */}
          {/* <div className="py-10 lg:hidden flex flex-wrap gap-4">
            <input style={{outline:'none'}} className="bg-transparent border-[1px] w-[50%] px-3 py-1" type="text" placeholder="Name" />
            <input style={{outline:'none'}} className="bg-transparent border-[1px] w-[48%] px-3 py-1" type="text" placeholder="Email" />
            <input style={{outline:'none'}} className="bg-transparent border-[1px] w-[100%] px-3 py-1" type="text" placeholder="Title" />
            <input  style={{outline:'none'}} className="bg-transparent border-[1px] w-[100%] px-3 py-1" type="text" placeholder="Message" />
          </div> */}
      </div>
    </div>
  );
};

export default Contact;
