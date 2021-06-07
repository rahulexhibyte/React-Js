import { useState } from "react";

const MealCartForm = (props) => {
  const [noOfCarts, setNoOfCarts] = useState(1);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddTocart(noOfCarts);
  };

  const increamentCartItem = () => {
    setNoOfCarts(noOfCarts + 1);
  };
  const decreamentCartItem = () => {
    setNoOfCarts(noOfCarts === 1 ? 1 : noOfCarts - 1);
  };
  return (
    <>
      <form className="form-meal-cart" onSubmit={onSubmitHandler}>
        <div className="meal-cart-inputs">
          <div className="cart-btn" onClick={increamentCartItem}>
            +
          </div>
          <input className="cart-input" value={noOfCarts} readOnly />
          <div className="cart-btn" onClick={decreamentCartItem}>
            -
          </div>
        </div>
        <button type="submit" className="addtocart-btn">
          Add to Cart
        </button>
      </form>
    </>
  );
};

export default MealCartForm;
