import React from "react";
import profile from "../../assets/images/Group 46.png";
import LargeButton from "../Common/Buttons/LargeButton";
import colorImage from "../../assets/images/Rectangle 27.png";

const Profile = () => {
  return (
    <div>
      <div className="flex size justify-between py-10 ">
        <div className="w-[40%] pt-[75px]">
          <h1 className="text-[32px] font-medium font-[font-family] text-white pb-6">
            Elias is a <span className="text-[#C778DD]">web designer</span> and{" "}
            <span className="text-[#C778DD]">front-end developer</span>
          </h1>
          <p className="text-[16px] font-normal w-[90%] text-[#ABB2BF] pb-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <LargeButton className={'spaced-words hover-bg-transition'} >Contact me!!</LargeButton>
        </div>
        <div>
          <img src={profile} alt="" />
          <div className="flex gap-3 items-center border-2 border-[#abb2bf] ml-10 pl-2 py-[6px] w-[84%] ">
            {" "}
            <span>
              {" "}
              <img src={colorImage} alt="" />{" "}
            </span>{" "}
            <p className="text-[#ABB2BF] spaced-words text-[18px]" >Currently working on <strong className="text-white" >Portfolio</strong> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
