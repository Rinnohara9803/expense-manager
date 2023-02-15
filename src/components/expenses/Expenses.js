import ExpenseFilter from "./ExpenseFilter";
import React, { useState, useContext } from "react";
import ExpenseList from "./ExpenseList";
import Charts from "../charts/Charts";
import ExpensesContext from "../../contexts/expenses-context";

const Expenses = (_) => {
  const expCtx = useContext(ExpensesContext);

  const [filterValue, setFilterValue] = useState(2019);

  const changeFilterValue = (value) => {
    console.log(value);
    setFilterValue(value);
  };

  const filteredExpenses = expCtx.theExpenses.filter(
    (e) => e.date.getFullYear().toString() === filterValue
  );

  return (
    <div>
      <Charts filteredExpenses={filteredExpenses}></Charts>
      <ExpenseFilter
        value={filterValue}
        handleFilterValueChange={changeFilterValue}
      ></ExpenseFilter>
      <ExpenseList filteredExpenses={filteredExpenses}></ExpenseList>
    </div>
  );
};

export default Expenses;
