import React from "react";
import logo from "../../assets/images/portfolio-logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:border-t-2 px-6 md:px-20 lg:px-0 ">
      <div className="size flex flex-col lg:flex-row justify-between py-8">
      {/* ----------- */}
        <div>
          <div className="flex items-center text-white gap-2">
            <img src={logo} alt="logo" />
            <p className="uppercase font-family">Ammad</p>
          </div>
          <div>
            <p className="text-white font-family pt-3">
              Web designer and front-end developer
            </p>
          </div>
        </div>
        {/* ------------ */}
        <div className="text-white pt-4 lg:pt-0">
          <h1 className="text-[24px] font-medium pb-2 font-family">Media</h1>
          <div className="flex gap-5">
            <div>
             
              <a href="https://www.linkedin.com/in/ammad-amin-637378202/" target="_blank" rel="noreferrer">
              <FaLinkedin />
              </a>
            </div>
            <div>
            <a href="https://github.com/ammad-amin-1999313" target="_blank" rel="noreferrer">

              <FaGithub />
            </a>
            </div>

            <div>
            <a href="https://www.instagram.com/ammad_khan99/?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank" rel="noreferrer" >

              <FaInstagramSquare />
            </a>
            </div>
          </div>
        </div>
      </div>
      {/* ----------- */}
      <div>
        <p className="font-family text-white lg:size text-center pb-8" >© Copyright 2023. Made by Ammad</p>
      </div>
    </div>
  );
};

export default Footer;
