import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Navigate,
} from "react-router-dom";
import CategoryList from "./CategoryList";
import Product from "./Product";
import Products from "./Products";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/category" />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/:catName" element={<Products />} />
        <Route path="/item/:itemId" element={<Product />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
}

export default Main;
