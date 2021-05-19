import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        onChangeFilter={filterYearHandler}
        selected={filteredYear}
      />
      {props.items.length === 0 ? (
        <div>No Expenses Found!!</div>
      ) : (
        props.items.map((expense) => {
          const eDate = new Date(expense.expenseDate);
          return eDate.getFullYear() === +filteredYear ? (
            <ExpenseItem
              key={expense.id}
              title={expense.expenseTitle}
              price={expense.expensePrice}
              date={expense.expenseDate}
            />
          ) : null;
        })
      )}
    </div>
  );
};

export default Expenses;
