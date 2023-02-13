import React, { useState } from "react";
import ExpenseForm from "../expenses/ExpenseForm";

const NewExpense = ({ saveExpenseHandler }) => {
  const [isEditing, setIsEditingValue] = useState(false);

  const setEditingHandlerToTrue = () => {
    setIsEditingValue(true);
  };

  const setEditingHandlerToFalse = () => {
    setIsEditingValue(false);
  };

  const clickAddExpenseHandler = () => {
    setEditingHandlerToTrue();
  };

  if (!isEditing) {
    return (
      <div className="text-center mb-6">
        <button className="btn" onClick={clickAddExpenseHandler}>
          Add Expenses
        </button>
      </div>
    );
  }
  return (
    <ExpenseForm
      saveExpenseHandler={saveExpenseHandler}
      setEditingHandlerToFalse={setEditingHandlerToFalse}
    ></ExpenseForm>
  );
};

export default NewExpense;
