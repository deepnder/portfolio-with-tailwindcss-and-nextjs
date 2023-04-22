import React from "react";
import Headings from "./Headings";
import secondHoveredImage from "../components/Images/secondHoverdImage.png";
import Image from "next/image";
export default function Work() {
  return (
    <>
      <section className="container mx-auto py-10 px-4">
        <Headings title="Creative Works" />
        <div className="grid grid-cols-3 gap-4">
          <div
            className="row-span-2 relative group
        "
          >
            <Image className="w-[500px] h-[100%]" alt="main-image" src={secondHoveredImage} />
            <div className="bg-[#000000b4] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project Title</div>
          </div>
          <div className="relative group ">
          <Image className="w-[500px] h-[234px]"alt="main-image" src={secondHoveredImage} />
            <div className="bg-[#000000b4] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project Title</div> 
          </div>
          <div className="relative group ">
          <Image className="w-[500px] h-[234px]"alt="main-image" src={secondHoveredImage} />
            <div className="bg-[#000000b4] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project Title</div> 
          </div>
          <div className="relative group ">
          <Image className="w-[500px] h-[234px]"alt="main-image" src={secondHoveredImage} />
            <div className="bg-[#000000b4] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project Title</div> 
          </div>
          <div className="relative group ">
          <Image className="w-[500px] h-[234px]"alt="main-image" src={secondHoveredImage} />
            <div className="bg-[#000000b4] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project Title</div> 
          </div>
          
        </div>
      </section>
    </>
  );
}
