import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ContextData from "./Context/ContextData";
import Category from "./components/Category";

function CategoryList() {
  const { categories } = useContext(ContextData);
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
      <tb></tb>
    </div>
  );
}

export default CategoryList;
