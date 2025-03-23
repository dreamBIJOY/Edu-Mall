import React from "react";
import StudentsEnrolledLogo from "../../../../assets/icon/about page icon/critical-thinking.png";
import CoursesLogo from "../../../../assets/icon/about page icon/elearning.png"
import CountriesLogo from "../../../../assets/icon/about page icon/country.png"

function Enrolled() {
  return (
    <div className="bg-[#F4F9FF] py-10">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div className="place-items-center w-[400px] h-[220px] p-6 hover:bg-white hover:rounded-md">
          <img className="w-[90px]" src={StudentsEnrolledLogo} alt="" />
          <h1 className="text-2xl mt-3 font-semibold">253,085</h1>
          <h1 className="text-xl mt-3 font-semibold">Students Enrolled</h1>
        </div>
        <div className="place-items-center w-[400px] h-[220px] p-6 hover:bg-white hover:rounded-md">
          <img className="[100px]" src={CoursesLogo} alt="" />
          <h1 className="text-2xl mt-3 font-semibold">1,205</h1>
          <h1 className="text-xl mt-3 font-semibold">Courses</h1>
        </div>
        <div className="place-items-center w-[400px] h-[220px] p-6 hover:bg-white hover:rounded-md">
          <img className="w-[80px]" src={CountriesLogo} alt="" />
          <h1 className="text-2xl mt-3 font-semibold">127</h1>
          <h1 className="text-xl mt-3 font-semibold">Countries</h1>
        </div>
      </div>
    </div>
  );
}

export default Enrolled;
