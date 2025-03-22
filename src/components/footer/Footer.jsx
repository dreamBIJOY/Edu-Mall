import React from 'react'
import Logo from '../../assets/image/hero image/logo.png'
import Twitter from '../../assets/icon/twitter.png'
import Facebook from '../../assets/icon/facebook.png'
import Instagram from '../../assets/icon/instagram.png'
import Linkedin from '../../assets/icon/linkedin.png'


function Footer() {
  return (
    <div className='py-10'>
        <div className='w-10/12 mx-auto flex items-center justify-between'>
            <div>
                <img className='w-[180px]' src={Logo} alt="" />
                <div className='mt-6'>
                <h1 className='text-xl text-gray-600'>Call Us</h1>
                <h2 className='text-xl text-[#0d78dd] font-semibold'>+88 01784 439097</h2>
                </div>

                <div className='text-xl mt-6'>
                    <h2>A Block, Main Road, Rampura, Dhaka</h2>
                    <h2>contact@edumall.com</h2>
                </div>

                <div className='flex items-center gap-8 mt-4'>
                <img className='w-[23px]' src={Twitter} alt="" />
                <img className='w-[30px]' src={Facebook} alt="" />
                <img className='w-[35px]' src={Instagram} alt="" />
                <img className='w-[25px]' src={Linkedin} alt="" />
                </div>

            </div>

            <div>
                <h1 className='text-2xl font-semibold'>About</h1>
                <div className='text-xl text-gray-600 mt-6 flex flex-col gap-4'>
                <h2>About Us</h2>
                <h2>Courses</h2>
                <h2>Instructor</h2>
                <h2>Events</h2>
                <h2>Become A Teacher</h2>
                </div>
            </div>

            <div>
                <h1 className='text-2xl font-semibold'>Links</h1>
                <div className='text-xl text-gray-600 mt-6 flex flex-col gap-4'>
                <h2>News & Blogs</h2>
                <h2>Library</h2>
                <h2>Gallery</h2>
                <h2>Partners</h2>
                <h2>Career</h2>
                </div>
            </div>

            <div>
                <h1 className='text-2xl font-semibold'>Support</h1>
                <div className='text-xl text-gray-600 mt-6 flex flex-col gap-4'>
                <h2>Documentation</h2>
                <h2>FAQs</h2>
                <h2>Forum</h2>
                <h2>Events</h2>
                <h2>Sitemap</h2>
                </div>
            </div>
            
        </div>
        <hr className='w-10/12 mx-auto text-gray-200 text-2xl mt-20' />
        <div className='w-10/12 mx-auto flex items-center justify-between mt-10'>
            <div className='flex items-center gap-6 text-xl text-gray-500'>
                <h1>Terms of Use</h1>
                <h1>Privacy Policy</h1>
            </div>

            <div>
                <h1 className='text-xl text-gray-500'>© 2025 EduMall Made with ❤️ by BDcalling Student</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer