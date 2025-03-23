import React from 'react'
import HeroImage from '../../../../assets/image/hero image/about-us-02-introduce-image.png'

function Hero() {
  return (
    <div className='bg-[#ffffff] py-28'>
        <div className='w-10/12 mx-auto'>
            <div>
                <h1 className='text-5xl text-gray-700 font-semibold w-[500px] leading-16 tracking-wider'>The Leading Global Marketplace for Learning and Instruction</h1>
            </div>

            <div>
            <img className='w-[1600px]' src={HeroImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero