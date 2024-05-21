import React from 'react'
import card01 from '../../../assets/images/card01.jpg'
import card03 from '../../../assets/images/card03.png'
import LargeButton from '../Buttons/LargeButton'
import SmallButton from '../Buttons/SmallButton'
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const projectsData=[
  {
      id:1,
      image:card01,
      name:"FootBallCoaching Center",
      tools:["HTML", "SCSS","Pythn","React"],
      about:"Minecraft servers hosting "
  },
  {
      id:2,
      image:card03,
      name:"ProtectX",
      tools:["HTML", "SCSS","Pythn","React"],
      about:'Discord anti-crash bot'
  },
  {id:3, name:"Kahoot Answers Viewer",
  image:card03,
  tools:["HTML", "SCSS","Pythn","React"],
  about:"Get answers to your kahoot quiz"
  },
 
]

const Card = () => {
  const wordSize=(str,maxLength)=>{
    if(str.length>maxLength){
      return str.substring(0,maxLength) + '...'
    }
    else {
      return str
    }
  }
  return (
    <div  className=' flex flex-wrap pt-8 justify-between text-white' >



{projectsData.map((project,id)=>(
  <div className='w-[28%] cards   border-2 mb-6 border-white transition-all duration-500 ease-in-out hover:duration-500 hover:ease-in-out hover:border-2 hover:border-[#C778DD] '  key={project.id} >
    <img src={project.image} alt="" />
    <h2 className='border-b-[1px] px-2 py-2' >{project.tools.join("  ")}</h2>
    <h2 className='py-3 px-4 text-2xl font-500'>{wordSize(project.name,15)}</h2>
    <p className='px-4'>{project.about}</p>
    <div className='flex gap-4 px-4 py-4'>
      <SmallButton  className={'border-2 border-[#C778DD] hover-bg-transition flex items-center gap-2'}>Live <AiOutlineDeliveredProcedure/> </SmallButton>
      <SmallButton className={ ' border-2 border-gray-500  hover:bg-gray-700 '} >GitHub</SmallButton>
    </div>
  </div>
))}
      
    </div>
  )
}

export default Card
