import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context.js";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);

  return (
    <Modal onClose={props.onClose}>
      <div className="cart-header-full">
        <div className="cart-close-icon">
          <div className="close-icon" onClick={props.onClose}>
            close
          </div>
        </div>

        <div className="cart-header">
          <label className="cart-title">Cart Items</label>
          <div>Total Price: ${cartCxt.totalAmount.toFixed(2)}</div>
        </div>
        <div className="hline-60" />
      </div>
      <ul className="cart-list">
        {cartCxt.items.map((cart) => {
          return (
            <CartItem
              key={cart.id}
              name={cart.name}
              desc={cart.desc}
              price={cart.price}
              amount={cart.amount}
              mealImage={cart.mealImage}
            ></CartItem>
          );
        })}
      </ul>
      <div className="cart-footer">
        <button className="order-btn">Order now</button>
      </div>
    </Modal>
  );
};

export default Cart;
