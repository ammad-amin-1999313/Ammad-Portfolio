import React, { useState } from "react";
import { navItems } from "../../utils/commonItems";
import logo from "../../assets/images/portfolio-logo.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import github from "../../assets/images/Github.png";
import figma from "../../assets/images/Figma.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <div className="relative">
      <div className="size px-6 md:px-20 xl:px-0 py-4 xl:py-8">
        <div className="flex justify-between items-center font-family text-white">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" />
              <p className="uppercase font-semibold">Ammad</p>
            </div>
          </div>
          <div className=" hidden xl:flex xl:justify-between xl:gap-8 xl:text-white">
            {navItems.map((item, index) => (
              <div key={index} className=" nav-item   border-transparent hover:border-[#C778DD] text-gray-400 hover:text-white">
                <Link to={item.link}>
                  <span className="text-[#c778dd] font-medium ">#</span>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="xl:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
      {/* -------------- Mobile Menu------------------ */}
      {isOpen && (
        <div className="bg-[#282c33] fixed top-0 left-0 right-0 bottom-0 py-4 px-4" style={{height:"100vh",zIndex:"90",overflowY:"scroll"}} >
          <div className="text-white flex justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" />
              <p className="uppercase font-semibold">Ammad</p>
            </div>
            <div>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
          <div className="pt-4">
            {navItems.map((item, index) => (
              <div key={index} className=" nav-item  border-transparent  py-3 hover:border-[#C778DD] text-gray-400 hover:text-white">
                <div className="text-3xl"  onClick={handleLinkClick}>
                <Link to={item.link} className=""> 
                  <span className="text-[#c778dd] font-medium ">#</span>
                  {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-20">
          <Link to='https://github.com/ammad-amin-1999313'>

            <img src={github} alt="github" />
          </Link>
          <Link to="https://www.figma.com/files/team/1303594169124609410/recents-and-sharing/recently-viewed?fuid=1089430852323762456">

            <img src={figma} alt="figma" />
          </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
