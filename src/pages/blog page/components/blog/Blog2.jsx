"use client";
import React from "react";
import BlogHeader from "./BlogHeader";
import BlogGrid from "./BlogGrid";

function Blog2() {
  return (
    <div>
      <main className="flex overflow-hidden mt-10 flex-col p-5 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <BlogHeader />
        <section className="flex flex-col mt-10 w-full max-md:mt-10 max-md:max-w-full">
          <BlogGrid />
        </section>
      </main>
    </div>
  );
}

export default Blog2;
