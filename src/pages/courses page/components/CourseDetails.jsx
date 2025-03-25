import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {
  const {id} = useParams()
    const [courses, setCourses] = useState(null)
    console.log(courses);
    
    
    
    useEffect(() => {
    fetch("/courses")
    .then(res => res.json())
    .then(data => {
      const findCategorieDetails = data.filter(details => details.id == Number(id))
      setCourses(findCategorieDetails)
    }
    )
    },[id])

    if (!courses) return <div className="flex justify-center items-center">
    <span className="loading loading-ring loading-xl  py-16">
        please wait..
      </span>
      </div> 
    
   
  return (
    <div>
        <div>
            <div>
          {
            courses.map(course => (
              <div>
                 <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold">{course.title}</h2>
        <p className="text-gray-600 mt-2">{course.instructor} | Last Update {course.lastUpdate}</p>
        <p className="text-gray-500 text-sm mt-1">{course.enrolled} already enrolled</p>
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold">About This Course</h3>
          <p className="text-gray-600 mt-2">{course.description}</p>
        </div>
      </div>
      <div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={course.image}
            alt="Course Thumbnail"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold">${course.price}</h3>
            <p className="text-gray-600">Level: {course.level}</p>
            <p className="text-gray-600">Duration: {course.duration} hours</p>
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              <FaShoppingCart /> Add to cart
            </button>
            <button className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
              </div>
            ))
          }
            </div>
        </div>
    </div>
  )
}

export default CourseDetails