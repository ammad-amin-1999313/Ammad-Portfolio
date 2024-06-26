import React from 'react'
import icon from "../../assets/images/Rectangle 26.png"
import qoute from '../../assets/images/quote.png'
const Qoute = () => {
  return (
    <div className='relative  xl:block py-10'>
      <div className='absolute hidden lg:block bottom-20 right-0'>
        <img src={icon} alt="" />
      </div>
      <div className=' px-6 md:px-20 xl:px-0 xl:w-[50%] mx-auto'>
        <img src={qoute} alt="" />
      </div>
    </div>
  )
}

export default Qoute
