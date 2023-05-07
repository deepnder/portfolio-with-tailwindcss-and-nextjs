import React from 'react'
import Link from 'next/link'

export default function Portfolio() {

const projectData=[
  {
    id:1,
    projectName:"18 Candleriggs",
    github:"https://18candleriggs.com/",
    website:"https://18candleriggs.com/"
  },
  {
    id:2,
    projectName:"TIC TAC TOE GAME [ REACT JS ]",
    github:"https://github.com/deepnder/react-tic-tac-toe-game",
    website:"https://react-tic-tac-toe-game-lemon.vercel.app/"
  },
  {
    id:3,
    projectName:"PORTFOLIO [ NEXT JS AND TAILWIND CSS ]",
    github:"https://github.com/deepnder/portfolio-with-tailwindcss-and-nextjs",
    website:"https://portfolio-with-tailwindcss-and-nextjs.vercel.app/"
  },
  {
    id:4,
    projectName:"SHOPPING CART [ REACT JS AND REDUX ]",
    github:"https://github.com/deepnder/react-shopping-cart-with-redux",
    website:"https://react-shopping-cart-with-redux.vercel.app/"
  },
  {
    id:5,
    projectName:"MINDS GEEKS [ REACT JS AND GSAP ]",
    github:"https://github.com/deepnder/react-website-with-gsap-and-animations",
    website:"https://react-website-with-gsap-and-animations.vercel.app/"
  }, 
  {
    id:6,
    projectName:"09 Network",
    github:"https://o9-network-b6w35.ondigitalocean.app/",
    website:"https://o9-network-b6w35.ondigitalocean.app/"
  },
  {
    id:7,
    projectName:"WEB3 Admin Panel",
    github:"https://github.com/deepnder/web3-admin-panel",
    website:"https://web3-admin-panel.vercel.app/"
  },
  {
    id:8,
    projectName:"Todo List",
    github:"https://github.com/deepnder/Todo-List",
    website:"https://github.com/deepnder/Todo-List"
  },
]

  return (
   <>
<div className=" ">
  <h1 className='text-black font-semibold text-[2rem] font-serif text-center pt-5'>Here my list of all projects</h1>

  <div className="flex flex-col justify-center px-5 pt-[6rem]">
    {projectData.map((items)=>
     <div className="flex flex-col gap-[0.7rem] pb-8 container">
     <h2 className='text-black text-[20px] '>{items.id}. {items.projectName}</h2>
     <p className='text-black text-[16px]' >GitHub : <Link href={items.github}> {items.github}</Link></p>
     <p className='text-black text-[16px]'>Website : <Link href={items.website}>{items.website} </Link> </p>
    </div>
    )}

  </div>
</div>

   </>
  )
}
