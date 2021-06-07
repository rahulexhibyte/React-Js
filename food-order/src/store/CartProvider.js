import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = state.items.concat(action.item);
      const updatesAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatesAmount,
      };

    case "REMOVE_ITEM":
      return;

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartaAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartaAction({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchCartaAction({ type: "REMOVE_ITEM", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
