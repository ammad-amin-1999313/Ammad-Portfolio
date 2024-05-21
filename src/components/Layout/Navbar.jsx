import React from "react";
import navItems from "../../utils/commonItems";
import logo from "../../assets/images/portfolio-logo.png";

const Navbar = () => {
  return (
    <div>
    <div className="size py-8">
      <div className="flex justify-between text-white">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <p className="uppercase" >Ammad</p>
          </div>
        </div>
        <div className="flex justify-between gap-8 text-white">
          {navItems.map((item, index) => (
            <div className="uppercase">
              {" "}
              <span className="text-[#c778dd]" >#</span> {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
