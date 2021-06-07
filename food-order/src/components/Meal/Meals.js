import React, { useState, useEffect } from "react";

import AvailableMeals from "./AvailableMeals";
// import meal from "../Meal/MealData";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  // https://food-order-react-e8438-default-rtdb.firebaseio.com/
  const mealData = () => {
    fetch(
      "https://food-order-react-e8438-default-rtdb.firebaseio.com/meals.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went Wrong.");
        }
        return res.json();
      })
      .then((res) => {
        const mealsDatabaseData = [];

        for (const key in res) {
          mealsDatabaseData.push({
            id: key,
            name: res[key].name,
            desc: res[key].desc,
            price: res[key].price,
            mealImage: res[key].mealImage,
          });
        }
        setMeals(mealsDatabaseData);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        setError(`Oops, ${err.message}`);
      });
  };

  useEffect(() => {
    mealData();
  }, []);
  return (
    <>
      <div className="meals-list">
        <div className="meals-txt">Explore Your Foods</div>
        {error && <span className="error-txt">{error}</span>}
        {!error &&
          meals.map((meal) => {
            return (
              <AvailableMeals
                key={meal.id}
                id={meal.id}
                name={meal.name}
                desc={meal.desc}
                price={meal.price}
                mealImage={meal.mealImage}
              ></AvailableMeals>
            );
          })}
      </div>
    </>
  );
};

export default Meals;
