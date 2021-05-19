import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveNewExpense = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(newExpenseData);
    props.onAddExpense(newExpenseData);
  };
  return (
    <div>
      <ExpenseForm onSave={saveNewExpense} />
    </div>
  );
};

export default NewExpense;
