import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";


const Contacts = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
          alert(`Copied to clipboard: ${text}`);
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      };
  return (
    <div>
    <div className='size pb-24 pt-4' >
    <div className="flex items-center gap-4">
          <div>
            <div className="text-[32px] flex font-medium  text-white">
              <span className=" font-family text-[#C778DD]">#</span>{" "}
              <h1 className="font-[font-family]">Contacts</h1>
            </div>
          </div>
          <div className="line-skills-contact mt-2"></div>
        </div>
        {/* ------------- */}
        <div className='text-gray-400 flex justify-between'>
            <div className='w-[36%]'>
                <p className='pt-8 font-family font-medium' style={{lineHeight:'26px'}}>
                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </p>
            </div>
            <div className='border-[1px] font-family rounded transition-all duration-500 ease-in-out hover:border-[#C778DD] hover:transition-all hover:duration-500 hover:ease-in-out p-4 '>
                <h4 className='text-white'>Message me here</h4>
                <span 
              className='flex gap-2 items-center pt-3 pb-2 cursor-pointer' 
              onClick={() => copyToClipboard('sardarammad6@gmail.com')}
            >
              <MdEmail /> sardarammad6@gmail.com
            </span>
            <span 
              className='flex gap-2 items-center cursor-pointer' 
              onClick={() => copyToClipboard('Ammad Amin')}
            >
              <FaLinkedin/> Ammad Amin
            </span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contacts
