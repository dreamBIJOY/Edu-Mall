import React from "react";
import AuthorInfo from "./AuthorInfo";
function BlogCard({ course }) {

  return (
    <article className="flex-1 shrink shadow-2xl p-5 rounded-4xl w-72">
      <img
        src={course.image}
        className="object-contain rounded-full border-4 border-gray-300 w-full aspect-[1.39]"
      />
      <div className="p-6 w-full max-md:px-5 ">
        <div className="w-full">
          <span className="text-sm font-semibold badge badge-secondary">{course.category}</span>
          <div className="mt-2 w-full">
            <h3 className="text-2xl font-bold">{course.title}</h3>
            <p className="mt-2 text-base leading-6">{course.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
