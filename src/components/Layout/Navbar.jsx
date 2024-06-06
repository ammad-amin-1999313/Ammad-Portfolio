import React from "react";
import navItems from "../../utils/commonItems";
import logo from "../../assets/images/portfolio-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <div className="size py-8">
      <div className="flex justify-between font-family text-white">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <p className="uppercase font-semibold" >Ammad</p>
          </div>
        </div>
        <div className="flex justify-between gap-8 text-white">
          {navItems.map((item, index) => (
            <div className=" nav-item   border-transparent hover:border-[#C778DD] text-gray-400 hover:text-white">
            <Link to={item.link}>

              <span className="text-[#c778dd] font-medium " >#</span>{item.name}
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
