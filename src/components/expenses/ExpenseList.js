import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ filteredExpenses, deleteExpenseHandler }) => {

  if (filteredExpenses.length === 0) {
    return <h1 className="text-white text-center font-bold tracking-wide">
    No Expenses found.
  </h1>;
  }
  return filteredExpenses.map((e) => (
    <ExpenseItem
      key={e.id}
      id={e.id}
      title={e.title}
      amount={e.amount}
      date={e.date}
      deleteExpenseHandler={deleteExpenseHandler}
    ></ExpenseItem>
  ));
};

export default ExpenseList;
