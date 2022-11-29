import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import ContextData from "./Context/ContextData";
import Header from "./Header";
import Main from "./Main";

function Layout() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);
  return !products.length > 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <ContextData.Provider value={{ products, setProducts, categories }}>
        <Header />
        <Main />
        <Cart />
      </ContextData.Provider>
    </div>
  );
}

export default Layout;
