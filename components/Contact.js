import React from 'react'
import Headings from './Headings'

export default function Contact() {
  return (
    <>
    <div className="container mx-auto py-10 px-4" id='contact'>
        <Headings title="Contact Us"/>
        <form action="" className='flex flex-col gap-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder='Name' className='inputStyle'required />
                <input type="email" placeholder='Email' className='inputStyle'required />
            </div>
            <input type="text" placeholder='Subject' className='inputStyle' required />
            <textarea name="" id="" placeholder='Message' className='inputStyle' rows="6"></textarea>
            <div>
                <button type='submit' className='btn'>SEND MESSAGE</button>
            </div>
        </form>
    </div>
    </>
  )
}
