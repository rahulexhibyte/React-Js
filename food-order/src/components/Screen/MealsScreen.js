import Meals from "../Meal/Meals";
import FullHeader from "../UI/FullHeader";
import CartProvider from "../../store/CartProvider";

const MealsScreen = () => {
  return (
    <>
      <CartProvider>
        <FullHeader />
        <Meals />
      </CartProvider>
    </>
  );
};

export default MealsScreen;
