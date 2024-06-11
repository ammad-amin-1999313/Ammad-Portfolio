import React from 'react'
import AboutDetails from './component/AboutDetails'
import skillframe from '../../assets/images/skills-frame.png'


const AboutMe = () => {
  return (
    <div className='relative pt-4'>
    <div className='absolute bottom-40 right-0'>
    <img src={skillframe} alt="" />
  </div>
      <div className='size' >
      <div className="flex items-center gap-4">
          <div>
            <div className="text-[32px] flex font-medium  text-white">
              <span className="text-[#C778DD]">#</span>{" "}
              <h1 className="font-family">about-me</h1>
            </div>
          </div>
          <div className="line-skills-about mt-2"></div>
        </div>
        {/* ---------- */}
        <AboutDetails/>

      </div>
    </div>
  )
}

export default AboutMe
