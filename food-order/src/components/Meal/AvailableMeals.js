import React, { useContext, useEffect } from "react";
import MealCartForm from "./MealCartForm";

import CartContext from "../../store/cart-context.js";

const AvailableMeals = (props) => {
  const cartCxt = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartCxt.items));
  }, [cartCxt.items]);

  const onAddToCartHandler = (numItems) => {
    cartCxt.addItem({
      id: props.id,
      name: props.name,
      amount: numItems,
      price: props.price,
      desc: props.desc,
      mealImage: props.mealImage,
    });
  };
  return (
    <>
      <div className="meal-item">
        <div className="meal-info">
          <div
            className="meal-image"
            style={{ backgroundImage: `url(${props.mealImage})` }}
          />
          <div className="meal-desc">
            <label className="meal-name">{props.name}</label>
            <p className="meal-summary">{props.desc}</p>
          </div>
        </div>
        <div className="meal-price-desc">
          <MealCartForm onAddTocart={onAddToCartHandler}></MealCartForm>
          <label className="meal-price">${props.price}</label>
        </div>
      </div>
    </>
  );
};

export default AvailableMeals;
