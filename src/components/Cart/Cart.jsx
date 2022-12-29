import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextCart from "../../context/CartContext";
import styles from "./style.module.css";

function Cart() {
  const { add, remove, cartProducts } = useContext(ContextCart);

  const navigate = useNavigate;
  let sum = 0;

  return (
    <div className={styles.cart}>
      <h4>Cart</h4>

      {cartProducts.map((item) => (
        <div className={styles.card}>
          <div className="cart"></div>
          <img
            onClick={() => navigate(`/product/${item.id}`)}
            src={item.image}
            alt={item.title}
            height="100px"
            width="100px"
          />
          <div>{(item.price * item.qty).toFixed(2)}$</div>
          <div>
            <button className="add" onClick={() => remove(item)}>
              -
            </button>
            <button>{item.qty}</button>
            <button className="add" onClick={() => add(item)}>
              +
            </button>
          </div>
          <div> {(sum += item.price * item.qty).toFixed(2)}</div>
        </div>
      ))}
      <div>
        {cartProducts.length == 0 ? (
          <b>Your cart is empty</b>
        ) : (
          <b> To payment: {sum.toFixed(2)}$ </b>
        )}
      </div>
    </div>
  );
}

export default Cart;
