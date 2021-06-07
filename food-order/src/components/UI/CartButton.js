import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCxt = useContext(CartContext);

  const noOfCartsItem = cartCxt.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <>
      <div>
        <div className="cart-btn-div" onClick={props.onCartClick}>
          Cart Store <span className="cart-item-num">{noOfCartsItem}</span>
        </div>
      </div>
    </>
  );
};

export default CartButton;
