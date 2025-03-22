import React from 'react'
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function TopSection() {
  return (
    <div className='bg-slate-800 py-4'>
        <div className='flex items-center justify-between w-10/12 mx-auto'>
        <div className='flex items-center gap-6'>
            <div className='flex items-center gap-1 cursor-pointer'>
             <MdCall size={20} className='text-[#ffc221]' />
             <h6 className='text-[17px] text-white hover:text-[#ffc221]'>(+88) 01784 439097</h6>
            </div>

            <div className='flex items-center gap-1 cursor-pointer'>
            <MdOutlineMail size={20} className='text-[#ffc221]' />
            <h6 className='text-[17px] text-white hover:text-[#ffc221]'>contact@edumall.com</h6>
            </div>
        </div>

        <div className='flex items-center gap-4'>
        <IoLogoTwitter size={25} className='text-white hover:text-[#ffc221] cursor-pointer' />
        <FaFacebookF size={23} className='text-white hover:text-[#ffc221] cursor-pointer' />
        <AiOutlineInstagram size={25} className='text-white hover:text-[#ffc221] cursor-pointer'/>
        <FaLinkedinIn size={25} className='text-white hover:text-[#ffc221] cursor-pointer' />
        </div>
    </div>
    </div>
  )
}

export default TopSection