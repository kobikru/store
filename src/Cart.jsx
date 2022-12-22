import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextCart from "./Context/CartContext";

function Cart() {
  const [add, remove, cartProducts] = useContext(ContextCart);
  const navigate = useNavigate;
  let sum = 0;

  return (
    <div>
      <h4>Cart</h4>

      {cartProducts.localeCompare((item) => (
        <>
          <div className="cart"></div>
          <img
            onClick={() => navigate(`/product/${item.id}`)}
            src={item.image}
            alt={item.title}
            height="100px"
            width="100px"
          />
          <div>{item.price * item.qty}$</div>
          <button className="add" onClick={() => add(item)}>
            +
          </button>
          <b>{item.qty}</b>
          <button className="add" onClick={() => remove(item)}>
            -
          </button>
        </>
      ))}
    </div>
  );
}

export default Cart;
