import React from "react";
import profile from "../../assets/images/Group 46.png";
import LargeButton from "../Common/Buttons/LargeButton";
import colorImage from "../../assets/images/Rectangle 27.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="xl:flex size xl:justify-between xl:py-10 ">
        <div className=" w-full px-6 md:px-20 xl:px-0 pb-4 xl:pb-0 xl:w-[40%] xl:pt-[75px]">
          <h1 className="text-[32px] font-semibold font-family text-white pb-6">
            Ammad is a <span className="text-[#C778DD]">web designer</span> and{" "}
            <span className="text-[#C778DD]">front-end developer</span>
          </h1>
          <p className="text-[16px] font-normal font-family xl:w-[90%] text-[#ABB2BF] pb-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <Link to='/contact'>
            <LargeButton
              className={
                "spaced-words font-family font-medium hover-bg-transition"
              }
            >
              Contact me!!
            </LargeButton>
          </Link>
        </div>
        <div className="px-6 md:px-20 xl:px-0">
          <img className="" src={profile} alt="" />
          <div className="flex gap-3 items-center border-2 border-[#abb2bf] px-4 xl:px-0 xl:ml-10 xl:pl-2 xl:py-[6px] lg:w-[60%]  xl:w-[84%] ">
            {" "}
            <span>
              {" "}
              <img src={colorImage} alt="" />{" "}
            </span>{" "}
            <p className="text-[#ABB2BF] spaced-words font-family text-[18px]">
              Currently working on{" "}
              <strong className="text-white">Portfolio</strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
