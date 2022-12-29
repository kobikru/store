import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProdactCard from "./components/ProdactCard";
import ContextData from "./context/ContextData";

function Products() {
  const [productsToShow, setProductsToShow] = useState([]);
  const { catName } = useParams();
  const { products } = useContext(ContextData);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/categories/${catName}`)
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
