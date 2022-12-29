import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ContextData from "../../context/ContextData";
import ContextCart from "../../context/CartContext";
import styles from "./style.module.css";
import { FaDollarSign } from "react-icons/fa";

function SingleProduct() {
  const [productToShow, setProductToShow] = useState([]);
  const { productId } = useParams();
  const { products } = useContext(ContextData);
  const { add, remove, cartProducts } = useContext(ContextCart);
  let x = 0;

  useEffect(
    () => {
      console.log(products);
      products.map((product) => {
        if (product.id == productId) {
          setProductToShow(product);
        }
      });
    },
    products,
    cartProducts
  );
  return productToShow.length === 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className={styles.singleproduct}>
      <img className={styles.img} src={productToShow.image} alt=""></img>
      <p className={styles.title}> {productToShow.title}</p>

      <h3>
        {productToShow.price}
        <span></span>
        <FaDollarSign />
      </h3>
      <span> {productToShow.description}</span>
      <div>
        <button
          onClick={() => {
            remove(productToShow);
          }}
        >
          -
        </button>
        <button>
          {cartProducts.find((x) => x.id == productId)
            ? cartProducts.find((x) => x.id == productId).qty
            : 0}
        </button>
        <button
          onClick={() => {
            add(productToShow);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;

// const { singleProduct } = useContext(ContextData);
// const setPrudoctid = useParams();
//
//
// return (
//   <div className="singleProduct">
//     <img className="card-img" src={singleProduct.image} alt=""></img>
//     <h2> {singleProduct.title}</h2>
//     <h3>{singleProduct.price}$</h3>
//     <span> {singleProduct.description}</span>
//   {/* */}
//     {/* <button className="button" onClick={x > 0 ? x - 1 : (x = 0)}>
//       -
//     </button> */}
//     <button>{x}</button>
//     {/* <button className="button" onClick={x++}>
//       +
//     </button> */}
//   </div>
// );
