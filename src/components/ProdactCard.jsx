import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../Context/ContextData";
import "./ProdactCard.css";

function ProdactCard(props) {
  const { products, setProducts } = useContext(ContextData);
  return (
    <>
      <div className="card">
        <Link to={`/product/${props.id}`}>
          <h4>{props.title}</h4>
        </Link>
        <img className="card-img" src={props.image} alt=""></img>
        <p>{props.price}$</p>
      </div>
    </>
  );
}

export default ProdactCard;
