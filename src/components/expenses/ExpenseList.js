import ExpenseItem from "./ExpenseItem";
import React, { useContext } from "react";
import ExpensesContext from "../../contexts/expenses-context";

const ExpenseList = ({ filteredExpenses }) => {
  const expCtx = useContext(ExpensesContext);

  if (filteredExpenses.length === 0) {
    return (
      <h1 className="text-white text-center font-bold tracking-wide">
        No Expenses found.
      </h1>
    );
  }
  return filteredExpenses.map((e) => (
    <ExpenseItem
      key={e.id}
      id={e.id}
      title={e.title}
      amount={e.amount}
      date={e.date}
      deleteExpenseHandler={expCtx.deleteExpenseHandler}
    ></ExpenseItem>
  ));
};

export default ExpenseList;
