import React, { useState } from "react";

const ExpenseForm = ({ saveExpenseHandler, setEditingHandlerToFalse }) => {
  const [isTitleValid, setIsTitleValid] = useState(true);

  const [expense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setNewExpense((previousState) => {
      return {
        ...previousState,
        title: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e) => {
    setNewExpense((previousState) => {
      return {
        ...previousState,
        amount: e.target.value,
      };
    });
  };

  const dateChangeHandler = (e) => {
    setNewExpense((previousState) => {
      return {
        ...previousState,
        date: e.target.value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newExpense = expense;
    console.log(expense.title);
    if (expense.title.trim().length === 0) {
      setIsTitleValid(false);
      return;
    }
    saveExpenseHandler({
      ...newExpense,
      id: Math.random(),
      date: new Date(expense.date),
    });
    setNewExpense({ title: "", amount: "", date: "" });
  };

  const cancelHandler = () => {
    setEditingHandlerToFalse();
  };

  return (
    <div className="flex-wrap h-auto w-full bg-purple-500 my-4 rounded-md px-5 py-5 text-start">
      <form onSubmit={submitForm}>
        <label> Title </label>
        <input
          // style={{ borderColor: "2px solid red" }}
          onChange={titleChangeHandler}
          value={expense.title}
          className={`w-full mb-1 text-lg pl-2 py-1 rounded-sm
            ${isTitleValid ? "bg-white" : "bg-red-100"} 
            // tailwind css based on react variable
            
            
          `}
          type="text"
        ></input>
        <label> Price </label>
        <input
          onChange={amountChangeHandler}
          value={expense.amount}
          className="w-full rounded-sm mb-1 text-lg pl-2 py-1"
          type="number"
        ></input>
        <label> Date </label>
        <input
          onChange={dateChangeHandler}
          value={expense.date}
          className="w-full rounded-sm mb-1 text-lg pl-2 py-1"
          // required
          type="date"
          min="2019-01-01"
          max="2023-12-31"
        ></input>
        <button className="btn">Add Expenses</button>
        <button className="btn bg-red-600 ml-5" onClick={cancelHandler}>
          {" "}
          Cancel{" "}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
