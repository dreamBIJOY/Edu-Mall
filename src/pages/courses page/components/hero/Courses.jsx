import React, { useEffect, useState } from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { CiSquarePlus } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from 'react-router-dom';


function Courses({categorieName}) {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("/courses.json")
    .then(res => res.json())
    .then(data => setCourses(data)
    )
  },[])

  const filterByCategory = categorieName ? courses.filter(course => course.category === categorieName) : courses;
  return (
    <div className='w-8/10'>

      <div>
        {
          filterByCategory.map((course, index) => (
            <div className='w-full h-[350px] p-4 scroll-auto' key={index}>
           <div className='flex items-center gap-10 justify-between'>
           <div>
              <img className='w-[350px] h-[250px] object-cover rounded-lg' src={course.image} alt={course.title} />
            </div>
           <div>
           <div>
              <h1 className='text-3xl'>{course.title}</h1>
           <div className='flex items-center gap-6 mt-4'>
           <div className='flex items-center gap-1'>
              <IoPlayCircleOutline className='text-gray-500' size={25} />
              <h5 className='text-xl text-gray-500'>{course.lessons}</h5>
              </div>
              <div className='flex items-center gap-1'>
              <WiTime3 className='text-gray-500' size={25} />
              <h5 className='text-xl text-gray-500'>{course.duration}</h5>
              </div>
              <div className='flex items-center gap-1'>
              <CiSquarePlus className='text-gray-700' size={25} />
              <h5 className='text-xl text-gray-500'>{course.level}</h5>
              </div>
           </div>
           <h1 className='text-2xl text-gray-500 mt-3 '>{course.description}</h1>
           <div className=' relative flex items-center gap-10'>
           <button className='btn px-10 py-6 outline-none  bg-white border-[#0071dc] text-[#0071dc] text-xl mt-6 hover:text-black hover:bg-yellow-500 hover:border-none'>Add to cart</button>
           <CgShoppingCart className='text-[#0071dc] absolute top-8 ml-3 items-center hover:text-black' size={25} />
           <Link to={`/coursedetails/${course.id}`}><button className='btn px-10 py-6 outline-none  bg-white border-gray-400 text-[#0071dc] text-xl mt-6 hover:text-black hover:bg-yellow-500 hover:border-none'>View details</button></Link>
            
        

           </div>
            </div>
           </div>

           <div>
              <h1 className='text-3xl font-semibold text-red-700'>${course.price.current}</h1>
              <h2 className='text-xl font-semibold text-gray-500 mt-5'>${course.price.original}</h2>
            </div>
           </div>
           <hr className='text-gray-300 mt-10' />
            </div>
          ))
        }
      </div>



    </div>
    
  )
}

export default Courses