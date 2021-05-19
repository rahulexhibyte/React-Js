const ExpenseDate = (props) => {
  const eDate = new Date(props.date);

  const month = eDate.toLocaleString("en-US", {
    month: "long",
  });
  const date = eDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = eDate.getFullYear();
  // const year = 2021;

  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_date">{date}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
