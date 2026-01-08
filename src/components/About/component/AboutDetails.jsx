import React from 'react'
import abouticon from "../../../assets/images/aboutGroup.png"
import LargeButton from '../../Common/Buttons/LargeButton'
import { FaArrowRightLong } from "react-icons/fa6";
import { aboutText } from '../../Common/About/AboutData';
import { Link } from 'react-router-dom';


const AboutDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between pb-10' >
    <div className='text-gray-400  lg:w-[52%] ' >
        <p className='pt-6 font-family' style={{lineHeight:"26px"}} > {aboutText.greeting}</p>
        <p className='pt-6 font-family ' style={{lineHeight:"26px"}}>{aboutText.intro}</p>
        <p className='pt-6 pb-6 font-family' style={{lineHeight:"26px"}}>{aboutText.passion}</p>
        <Link to="/about">

        <LargeButton className={'flex items-center gap-2 hover-bg-transition font-family'} >Read more <span className='mt-1' ><FaArrowRightLong /></span> </LargeButton>
        </Link>
    </div>
    <div className='lg:mt-[-42px]' >
      <img src={abouticon} alt="" />

    </div>
    </div>
  )
}

export default AboutDetails
