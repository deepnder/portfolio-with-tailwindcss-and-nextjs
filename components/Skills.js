import React from 'react'
import Headings from './Headings'

export default function Skills() {
  return (
    <>
    <section className='container mx-auto py-10 px-4' >
<Headings title="Skills"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
        <p>React js</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]">
                
            </div>
        </div>
    </div>
    <div>
        <p>Next js</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]">
                
            </div>
        </div>
    </div>
    <div>
        <p>Redux</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[70%]">
                
            </div>
        </div>
    </div>
    <div>
        <p>UI Frameworks</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]">
                
            </div>
        </div>
    </div>
    <div>
        <p>Javascript</p>
        <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]">
                
            </div>
        </div>
    </div>
</div>
</section>
    </>
  )
}
