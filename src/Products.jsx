import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdactCard from "./components/ProdactCard";

function Products(props) {
  const [productsToShow, setProductsToShow] = useState([]);
  const { catName } = useParams();
  console.log(catName);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProductsToShow(data));
  }, []);

  return (
    <div>
      {productsToShow.map((product) => (
        <ProdactCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
