import React, { useEffect, useState } from "react";
import axios from "axios";

import Cart from "./Cart";
import PopupLogin from "./components/PopupLogin";
import ContextCart from "./Context/CartContext";
import ContextData from "./Context/ContextData";
import Header from "./Header";
import Main from "./Main";

function Layout() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);

  const [cartProducts, setCartProducts] = useState([]);

  const add = (prod) => {
    const exist = cartProducts.find((x) => x.id === prod.id);
    if (exist) {
      setCartProducts(
        cartProducts.map((x) =>
          x.id === prod.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...prod, qty: 1 }]);
    }
  };
  const remove = (prod) => {
    const exist = cartProducts.find((x) => x.id === prod.id);
    if (exist.qty === 1) {
      setCartProducts(cartProducts.filter((x) => x.id !== prod.id));
    } else {
      setCartProducts(
        cartProducts.map((x) =>
          x.id === prod.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/categories")

      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")

      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/product/${productId}`)

      .then((data) => {
        setSingleProduct(data.data);
        console.log(data);
      });
  }, []);
  return products.length < 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <>
      <div>
        <ContextCart.Provider
          value={{ cartProducts, setCartProducts, add, remove }}
        >
          <ContextData.Provider
            value={{
              products,
              setProducts,
              categories,
              singleProduct,
              setproductId: setProductId,
            }}
          >
            {/* <PopupLogin />
            <Header /> */}
            <Main />
            {/* <Cart /> */}
          </ContextData.Provider>
        </ContextCart.Provider>
      </div>
    </>
  );
}

export default Layout;
