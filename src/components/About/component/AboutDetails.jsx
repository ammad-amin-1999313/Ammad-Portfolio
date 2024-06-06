import React from 'react'
import abouticon from "../../../assets/images/aboutGroup.png"
import LargeButton from '../../Common/Buttons/LargeButton'
import { FaArrowRightLong } from "react-icons/fa6";


const AboutDetails = () => {
  return (
    <div className='flex justify-between pb-10' >
    <div className='text-gray-400  w-[52%] ' >
        <p className='pt-6 font-family' style={{lineHeight:"26px"}} >Hello, i’m Ammad!</p>
        <p className='pt-6 font-family ' style={{lineHeight:"26px"}}>I’m a self-taught front-end developer based in Islamabad, Pakistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
        <p className='pt-6 pb-6 font-family' style={{lineHeight:"26px"}}>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
        <LargeButton className={'flex items-center gap-2 hover-bg-transition font-family'} >Read more <span className='mt-1' ><FaArrowRightLong /></span> </LargeButton>
    </div>
    <div className='mt-[-42px]' >
      <img src={abouticon} alt="" />

    </div>
    </div>
  )
}

export default AboutDetails
