import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Navigate,
} from "react-router-dom";
import CategoryList from "./CategoryList";
import Products from "./Products";
import ProductCard from "./components/ProdactCard";
import SingleProduct from "./SingleProduct";

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/category" />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/:catName" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default Main;
