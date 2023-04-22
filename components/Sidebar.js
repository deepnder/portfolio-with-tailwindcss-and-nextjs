import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

export default function Sidebar({toggleNavbar,isOpen}) {
  return (
   <>
   <div className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center `}>

    <div className="absolute top-0 right-0 mr-[34px] mt-[10px] text-[24px] hover:cursor-pointer" onClick={toggleNavbar}>
      <RiCloseFill/>
    </div>
    <div className="flex flex-col gap-4 text-[28px]">
      <a href="#" className='hover:text-[#ff4d41] '>Home</a>
      <a href="#" className='hover:text-[#ff4d41] '>About</a>
      <a href="#" className='hover:text-[#ff4d41] '>Portfolio</a>
      <a href="#" className='hover:text-[#ff4d41] '>Blogs</a>
      <a href="#" className='hover:text-[#ff4d41] '>Contact</a>
    </div>
   </div>
   </>
  )
}
