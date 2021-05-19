import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-desc">
        <h3>{props.title}</h3>
        <div className="expense-price">${props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
