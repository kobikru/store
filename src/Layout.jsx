import React, { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import PopupLogin from "./components/Popuologin/PopupLogin";
import ContextCart from "./context/CartContext";
import ContextData from "./context/ContextData";
import Header from "./components/Header/Header";
import Main from "./Main";
import styles from "./layout.module.css";

function Layout() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [user, setUser] = useState([]);
  const server = `http://localhost:3001/api`;

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
      .get(`${server}/products/categories`)

      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${server}/products`)

      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return categories.length === 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <>
      <div className={styles.layout}>
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
            <Cart />

            <Main />
          </ContextData.Provider>
        </ContextCart.Provider>
      </div>
    </>
  );
}

export default Layout;
