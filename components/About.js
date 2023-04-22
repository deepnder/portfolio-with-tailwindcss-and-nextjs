import React from "react";
import Headings from "./Headings";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import secondHoveredImage from "../components/Images/secondHoverdImage.png";
import Button from "./Button";

export default function About() {
  return (
    <>
      <section className="container mx-auto py-10 px-4">
        <Headings title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          <div>
            {/* <img src="/components/Images/secondHoverdImage.png" className='w-[400px]' alt="" /> */}
            <Image className="w-[400px] h-[234px]" alt="main-image" src={secondHoveredImage} />
          </div>
          <div>
            <div className="flex items-center justify-between w-[300px] ">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center font-medium">
                  <AiOutlineGift className="text-[#ff4d41] text-[22px]" />{" "}
                  Birthday
                </div>
                <div className="flex gap-4 items-center font-medium">
                  <FiBookOpen className="text-[#ff4d41] text-[22px]" /> Study
                </div>
                <div className="flex gap-4 items-center font-medium">
                  <BsGlobe2 className="text-[#ff4d41] text-[22px]" /> Website
                </div>
                <div className="flex gap-4 items-center font-medium">
                  <TbPacman className="text-[#ff4d41] text-[22px]" /> Interest
                </div>
                <div className="flex gap-4 items-center font-medium">
                  <IoLocationOutline className="text-[#ff4d41] text-[22px]" />{" "}
                  Location
                </div>
              </div>
              <div className="flex flex-col gap-6 text-gray-600">
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
              </div>
              <div className="flex flex-col gap-6 text-gray-600">
                <div>03.12.2003</div>
                <div>University of hanumangarh</div>
                <div>www.dummy.com</div>
                <div>Reading , Blogging</div>
                <div>Hisar,Haryana</div>
              </div>
            </div>
            <div className="max-w-[800px]">
              <h2 className="font-bold mt-16 mb-10">
                I'm Deepender and Frontend Developer
              </h2>
              <p className="text-gray-600">
                Hi! My name is Deepender I am a Web Developer and I'm very
                passionate and dedicated to my work with 1 year experience as a
                professional
              </p>
              <Button link="#" text="Hire Me" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
