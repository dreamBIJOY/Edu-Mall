import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoriesDetails() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
console.log(courses);

  useEffect(() => {
    fetch("/courses.json")
      .then(res => res.json())
      .then(data => {
        const findCategorieByCourse = data.filter(course => course.category === id )
        setCourses(findCategorieByCourse);
      });
  }, [id]);

  if (!courses) return <div className="flex justify-center items-center">
  <span className="loading loading-ring loading-xl  py-16">
      please wait..
    </span>
    </div> 
  

  return (
    <div className="">
      <div className="bg-[#e5f1fb] py-10">
        <h1 className="text-4xl font-semibold text-center">
          Category By Courses
        </h1>
      </div>
      <div className="w-10/12 mx-auto">
        <div>
          {courses.map((course, index) => (
            <div className="w-full h-[350px] p-4 scroll-auto" key={index}>
              <div className="flex items-center gap-10 justify-between">
                <div>
                  <img className="w-[350px] h-[250px] object-cover rounded-lg" src={course.image} alt={course.title} />
                </div>
                <div>
                  <h1 className="text-3xl">{course.title}</h1>
                  <div className="flex items-center gap-6 mt-4">
                    <h5 className="text-xl text-gray-500">Lessons: {course.lessons}</h5>
                    <h5 className="text-xl text-gray-500">Duration: {course.duration}</h5>
                    <h5 className="text-xl text-gray-500">Level: {course.level}</h5>
                  </div>
                  <p className="text-2xl text-gray-500 mt-3">{course.description}</p>
                  <button className="btn bg-blue-500 text-white px-6 py-2 mt-4">Add to Cart</button>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-red-700">${course.price.current}</h1>
                  <h2 className="text-xl font-semibold text-gray-500 mt-5">${course.price.original}</h2>
                </div>
              </div>
              <hr className="text-gray-300 mt-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesDetails;
