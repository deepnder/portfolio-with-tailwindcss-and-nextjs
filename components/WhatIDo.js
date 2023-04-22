import React from 'react'
import Headings from './Headings'
import {RiLightbulbFlashLine} from "react-icons/ri"

export default function WhatIDo() {
  return (
   <>
   <section className='container mx-auto py-10 px-4' >
<Headings title="What I do"/>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white ">
        <RiLightbulbFlashLine className='text-[28px]'/>
        <h2 className='font-medium text-[20px]'>Creative Designs</h2>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perferendis corporis nisi ipsum reiciendis ex aliquam adipisci placeat hic porro dolores explicabo, dolore, officiis maiores assumenda, expedita sequi libero et.</p>
    </div>
    <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white ">
        <RiLightbulbFlashLine className='text-[28px]'/>
        <h2 className='font-medium text-[20px]'>Creative Designs</h2>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perferendis corporis nisi ipsum reiciendis ex aliquam adipisci placeat hic porro dolores explicabo, dolore, officiis maiores assumenda, expedita sequi libero et.</p>
    </div> <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white ">
        <RiLightbulbFlashLine className='text-[28px]'/>
        <h2 className='font-medium text-[20px]'>Creative Designs</h2>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perferendis corporis nisi ipsum reiciendis ex aliquam adipisci placeat hic porro dolores explicabo, dolore, officiis maiores assumenda, expedita sequi libero et.</p>
    </div>
</div>
   </section>
   </>
  )
}
