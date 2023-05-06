import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Navbar({toggleNavbar}) {

  return (
    <>
      <div className="bg-white fixed top-0 w-[100%] z-6">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="text-[24px]">Deepender Choudhary</div>
          <div className="hidden md:flex gap-6">
            <Link href='/'>
                <p className="hover:text-[#ff4D41]">Home</p>
            </Link>
            <Link href='#about'>
                <p className="hover:text-[#ff4D41]">About</p>
            </Link>    <Link href='/portfolio'>
                <p className="hover:text-[#ff4D41]">Portfolio</p>
            </Link>    <Link href='#blog'>
                <p className="hover:text-[#ff4D41]">Blog</p>
            </Link>    <Link href='#contact'>
                <p className="hover:text-[#ff4D41]">
                    Contact
                </p>
            </Link>
          </div>
          <a href="#" className="invisible border-[#ff4D41] rounded-[5px] px-4 py-1 text-[#ff4D41] items-center gap-2 hover
           hover:text-white hover:bg-[#ff4d41] transition duration-200  ">Download CV</a>

          <div className="md:hidden text-[24px]" onClick={toggleNavbar}>
            <FiMenu/>
          </div>
        </div>
      </div>
    </>
  );
}
