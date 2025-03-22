import React from "react";
import { GoSearch } from "react-icons/go";


function TextSection() {
  return (
    <div className="w-5/10">
      <div className=" mt-20">
        <h3 className="text-2xl mt-24 text-[#0d78dd]">Start to success</h3>
        <h1 className="text-5xl font-bold w-[700px] mt-6 tracking-wider leading-16">
          Access To <span className="ml-3 mr-3 text-[#0d78dd]">5500+</span> Courses from{" "}
          <span className="ml-3 mr-3 text-[#0d78dd]">480</span> Instructors & Institutions
        </h1>
        <h2 className="text-2xl text-gray-500 mt-6">
          Take your learning organisation to the next level.
        </h2>
        <div className="relative mt-12">
          <input
            className="px-6 w-[600px] h-[70px] rounded-lg outline-[#0071DC] shadow-md bg-white text-gray-400"
            type="text"
            placeholder="What do you want to learn?"
          />
          <p className="absolute right-35 top-5">
            <GoSearch size={30} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextSection;
