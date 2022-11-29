import React, { useContext } from "react";
import ContextData from "../Context/ContextData";
import "./ProdactCard.css";

function ProdactCard(props) {
  const { products, setProducts } = useContext(ContextData);
  return (
    <>
      <div className="card">
        <h4>{props.title}</h4>
        <img className="card-img" src={props.image} alt=""></img>
        <p>{props.price}$</p>
      </div>
    </>
  );
}

export default ProdactCard;
