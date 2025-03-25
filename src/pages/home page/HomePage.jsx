import React from "react";
import TextSection from "./home components/hero section/TextSection";
import ImageSection from "./home components/hero section/ImageSection";
import LastSection from "./home components/hero section/LastSection";
import Categories from "../categorie page/categories components/Categories";
import PopularCourses from "./home components/PopularCourses";



function HomePage() {
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <div className="w-10/12 mx-auto flex gap-6 py-20 ">
          <TextSection />
          <ImageSection/>
        </div>
      </div>
          <LastSection/>
          <Categories/>
          <PopularCourses/>
          
    </>
  );
}

export default HomePage;
