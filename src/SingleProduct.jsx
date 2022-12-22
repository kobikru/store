import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./components/ProdactCard.css";
import ContextData from "./Context/ContextData";
import ProdactCard from "./components/ProdactCard";

function SingleProduct() {
  const [productsToShow, setProductsToShow] = useState([]);
  const { catName } = useParams();
  const { products } = useContext(ContextData);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/product/${catName}`)
      .then((res) => res.json())
      .then((data) => setProductsToShow(data));

    console.log(catName);
  }, []);
  return (
    <div>
      productsToShow: {productsToShow}
      {/* {<ProdactCard key={productsToShow.id} {...productsToShow} />} */}
    </div>
  );
}

export default SingleProduct;

// const { singleProduct } = useContext(ContextData);
// const setPrudoctid = useParams();
// const x = 0;
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
