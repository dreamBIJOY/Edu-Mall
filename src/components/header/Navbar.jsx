import React from 'react'
import Logo from '../../assets/image/hero image/logo.png'
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiShoppingBagOpenFill } from "react-icons/pi";


function Navbar() {
  return (
    <div className='bg-white py-8'>
        <div className='flex items-center w-10/12 mx-auto justify-between'>
            <div>
                <img className='w-[180px]' src={Logo} alt="" />
            </div>

        
            <div className='flex items-center gap-3'>
            <RiMenuUnfold3Fill size={35} className='' />
            <h1 className='text-xl font-semibold'>Category</h1>
            </div>

            <div>
                <ul className='flex items-center gap-7'>
                    
                    <div className='flex gap-0.5 items-center'>
                    <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Home</li>
                    <MdKeyboardArrowDown size={25} />
                    </div>
                    
                    <div className='flex gap-0.5 items-center'>
                    <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Courses</li>
                    <MdKeyboardArrowDown size={25} />
                    </div>

                    <div className='flex gap-0.5 items-center'>
                    <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Blog</li>
                    <MdKeyboardArrowDown size={25} />
                    </div>

                    <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>About Us</li>
                
                    <li className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Contact Us</li>
                    
                </ul>
            </div>

            <div className='relative'>
            <PiShoppingBagOpenFill size={30} />
            <p className='w-[25px] h-[25px] bg-[#0071DC] rounded-full text-white text-lg grid place-items-center absolute -top-2 ml-5'>0</p>
            </div>

            <div className='flex items-center gap-6'>
                <button className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black transition-all duration-300 hover:from-sky-500 hover:to-indigo-500'>Log in</button>
                <button className='btn px-4 py-7 text-xl font-semibold rounded-lg border-none bg-[#e5f1fb] hover:bg-[#0d78dd] text-[#0d78dd] hover:text-white '>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar