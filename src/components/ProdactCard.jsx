import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../context/ContextData";
import "./ProdactCard.css";

function ProdactCard(props) {
  const { products, setProducts, add, remove } = useContext(ContextData);
  return (
    <>
      <div className="card">
        <Link to={`/product/${props.id}`}>
          <h4>{props.title}</h4>
        </Link>
        <img className="card-img" src={props.image} alt=""></img>
        <p>{props.price}$</p>
      </div>
      {/* <div>
        <button
          onClick={() => {
            remove(props);
          }}
        >
          -
        </button>
        <button>
          {props.find((x) => x.id == products.id)
            ? props.find((x) => x.id == props.idd).qty
            : 0}
        </button>
        <button
          onClick={() => {
            add(props);
          }}
        >
          +
        </button>
      </div> */}
    </>
  );
}

export default ProdactCard;
