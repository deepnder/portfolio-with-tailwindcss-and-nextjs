import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
   <div className=" bg-[url('../components/Images/secondHoverdImage.png')] h-screen bg-fixed flex items-center bg-cover bg-center"> 
<div className="container mx-auto px-4">
  <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
    <div className="">
      <h1 className='text-5xl'>I'm Deepender Choudhary</h1>
      <h1><span class="text_1">A Frontend Developer</span><span class="text_2">I am WeB Designer</span></h1>
    </div>
    <div className="bg-[#ff3d41] h-[2px] w-[40px]"></div>
    <div>
      <p>In a professional context it often happens that private clients  corder a publication to be made</p>
      <Button  link="#" text="Learn More"/>
    </div>
  </div>
</div>
   </div>
  )
}
