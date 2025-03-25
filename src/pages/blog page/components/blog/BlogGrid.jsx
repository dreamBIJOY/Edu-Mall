import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function BlogGrid() {

  const [courses, setcourses] = useState([])
  useEffect(() => {
    fetch('/public/artdesing.json')
      .then(res => res.json())
      .then(data => setcourses(data))
  }, [])

  return (
    <div className="mt-5 mx-auto w-full md:mt-5 md:w-9/12">
      <div className="grid grid-cols-4 gap-4 items-start w-full max-md:max-w-full">
        {courses.map((course) => (
          <BlogCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default BlogGrid;
