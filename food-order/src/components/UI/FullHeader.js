import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../UI/Header";

const FullHeader = () => {
  const [isCartShown, setIsCartShown] = useState();

  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onCartClick={showCartHandler}></Header>
    </>
  );
};

export default FullHeader;
