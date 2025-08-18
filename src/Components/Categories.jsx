import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div className="font-bold grid grid-cols-1 gap-3 mt-3">
      All Categories ({categories.length})
      {categories.map((category) => (
        <NavLink
          key={category.id}
          className={
            "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent flex justify-start"
          }
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
