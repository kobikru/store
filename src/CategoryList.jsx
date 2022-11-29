import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ContextData from "./Context/ContextData";
import Category from "./components/Category";

function CategoryList() {
  const { categories } = useContext(ContextData);
  return (
    <div>
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
