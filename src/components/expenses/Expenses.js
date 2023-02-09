import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = ({ expenses, deleteExpenseHandler }) => {
  const [filterValue, setFilterValue] = useState(2019);

  const changeFilterValue = (value) => {
    console.log(value);
    setFilterValue(value);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === filterValue
  );

  let expensesContent = (
    <h1 className="text-white text-center font-bold tracking-wide">
      No Expenses found for {filterValue}
    </h1>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((e) => (
      <ExpenseItem
        key={e.id}
        id={e.id}
        title={e.title}
        amount={e.amount}
        date={e.date}
        deleteExpenseHandler={deleteExpenseHandler}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <ExpenseFilter
        value={filterValue}
        handleFilterValueChange={changeFilterValue}
      ></ExpenseFilter>
      {expensesContent}
    </div>
  );
};

export default Expenses;
