import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [formInput, setFormInput] = useState({
    expenseTitle: "",
    expensePrice: "",
    expenseDate: new Date(),
  });

  const inputChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSave(formInput);
    setFormInput({
      expenseTitle: "",
      expensePrice: "",
      expenseDate: new Date(),
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
          <div className="new-expense_control">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              value={formInput.expenseTitle}
              onChange={inputChange}
              name="expenseTitle"
            />
          </div>
          <div className="new-expense_control">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={formInput.expensePrice}
              onChange={inputChange}
              placeholder="Price"
              name="expensePrice"
            />
          </div>
          <div className="new-expense_control">
            <label>Date</label>
            <input
              type="date"
              value={formInput.expenseDate}
              onChange={inputChange}
              name="expenseDate"
            />
          </div>
        </div>
        <div className="new-expenses_submit">
          <button type="submit"> Add Expense </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
