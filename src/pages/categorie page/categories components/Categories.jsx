import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

function Categories() {
 
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="w-10/12 mx-auto py-12">
      <div>
        <h1 className="text-3xl font-bold">Top Categories</h1>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-16">
        {categories.map((categori, index) => (
         <Link to={`/categories/${categori.id}`}>
          <div
            key={index}
            className="w-[345px] h-[100px] flex items-center gap-5 bg-[#f1f3f8] rounded-md mb-2 p-10 cursor-pointer hover:bg-[#0071dc] group"
          >
            <img src={categori.icon} alt={categori.name} />
            <h1 className="text-xl  text-gray-600 group-hover:text-white">
              {categori.name}
            </h1>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
