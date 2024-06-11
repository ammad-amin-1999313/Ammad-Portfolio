import React from 'react'
import Card from '../components/Common/Cards/Card'
import icon from '../assets/images/project-icon.png'

const Project = () => {
  return (
    <div className="relative ">
    <div className='absolute top-20 right-0'>
    <img src={icon} alt="" />
  </div>
    <div className=" size font-family pt-10 pb-24">
    
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-[32px] flex  font-medium  text-white">
              <span className="text-[#C778DD]">/</span> <h1 className="font-[font-family]">projects</h1>
            </div>
              <p className='font-family  text-white'>List of my projects</p>
          </div>
        </div>
       
      </div>
      {/* ---------------projects */}
      <div>
      <Card/>
      </div>
    </div>
    </div>
  )
}

export default Project
