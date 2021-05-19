import React, { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const App = () => {
  const dummyExpenses = [
    {
      expenseTitle: "Car Insuarance",
      expensePrice: 254.21,
      expenseDate: new Date(2020, 5, 12),
    },
    {
      expenseTitle: "new Mobile",
      expensePrice: 999.69,
      expenseDate: new Date(2021, 1, 14),
    },
    {
      expenseTitle: "Bike Washing",
      expensePrice: 25.5,
      expenseDate: new Date(2021, 4, 10),
    },
    {
      expenseTitle: "House Light Bill",
      expensePrice: 25,
      expenseDate: new Date(2019, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
