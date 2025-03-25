import React, { useEffect, useState } from "react";

function Categories({handleCName}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-[350px] h-[900px] bg-[#f9f9fb] p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold">Filter by category</h1>
      <div className="mt-14">
        {categories.map((categorie, index) => (
          <div onClick={() => handleCName(categorie)}
            className="flex gap-6 items-center mb-7 cursor-pointer"
            key={index}
          >
            <img
              className="w-[30px]"
              src={categorie.icon}
              alt={categorie.name}
            />
            <h1 className="text-xl">{categorie.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
