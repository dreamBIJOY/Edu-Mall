import React from "react";

function BlogHeader() {
  return (
    <section className="flex flex-col self-center w-8/12 text-center">
      <h2 className="self-center text-base font-semibold whitespace-nowrap">
        Where IT Crafts a Better Future
      </h2>
      <div className="mt-4 w-full max-md:max-w-full">
        <h1 className="text-4xl font-bold max-md:max-w-Full max-md:text-2xl">
          Get ready to embark on a journey of knowledge with our innovative learning platform.
        </h1>
        <p className="mt-6 text-lg max-md:max-w-full">
          At Edu Mall, we believe that success is a journey, not a destination. That's why we're always looking for new and innovative ways to help our learners achieve their goals. In this section, we share the stories of our learners who have used our products and services to achieve their own success.{" "}
        </p>
      </div>
    </section>
  );
}

export default BlogHeader;
