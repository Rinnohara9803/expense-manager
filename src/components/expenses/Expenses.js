import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Charts from "../charts/Charts";

const Expenses = ({ expenses, deleteExpenseHandler }) => {
  const [filterValue, setFilterValue] = useState(2019);

  const changeFilterValue = (value) => {
    console.log(value);
    setFilterValue(value);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === filterValue
  );

  return (
    <div>
      <Charts filteredExpenses={filteredExpenses}></Charts>
      <ExpenseFilter
        value={filterValue}
        handleFilterValueChange={changeFilterValue}
      ></ExpenseFilter>
      <ExpenseList
        filteredExpenses={filteredExpenses}
        deleteExpenseHandler={deleteExpenseHandler}
      ></ExpenseList>
    </div>
  );
};

export default Expenses;
