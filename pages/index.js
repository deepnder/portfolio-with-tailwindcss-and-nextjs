import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatIDo from '@/components/WhatIDo'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'


export default function Home() {
const [isOpen,setIsOpen]=useState(false)

const toggleNavbar=()=>{
  setIsOpen(!isOpen)
  console.log("dd");
}

  return (
 <>
 <Navbar toggleNavbar={toggleNavbar}/>
 <Sidebar toggleNavbar={toggleNavbar} isOpen={isOpen}/>
 <Hero/>
 <About/>
 <WhatIDo/>
 <Skills />
 <Contact/>
 <Footer/>
 </>
  )
}
