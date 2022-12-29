import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ContextData from "../../context/ContextData";
import Category from "../Category";

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
