const CartItem = (props) => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-info">
          <div
            className="cart-image"
            style={{
              backgroundImage: `url(${props.mealImage})`,
            }}
          />
          <div className="cart-desc">
            <label className="cart-name">{props.name}</label>
            <p className="cart-summary">{props.desc}</p>
          </div>
        </div>
        <div className="cart-price-desc">
          <label className="cart-price">${props.price}</label>
          <span className="cart-item-amount">{props.amount}</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
