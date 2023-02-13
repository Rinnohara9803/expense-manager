import React, { useState } from "react";
import DeleteDialog from "../dialogs/DeleteDialog";

const ExpenseForm = ({ saveExpenseHandler, setEditingHandlerToFalse }) => {
  const [showDialog, setShowDialog] = useState({
    message: "e",
    value: false,
  });
  const [isFormValid, setIsFormValid] = useState(true);

  const [expense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
    setNewExpense((previousState) => {
      return {
        ...previousState,
        title: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
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
    if (
      expense.title.trim().length === 0 &&
      expense.amount.trim().length === 0 &&
      expense.date.trim().length === 0
    ) {
      setIsFormValid(false);
      setShowDialog((previousState) => {
        return {
          ...previousState,
          value: true,
          message: "Please fill in the form.",
        };
      });
      return;
    } else if (expense.title.trim().length === 0) {
      setIsFormValid(false);
      setShowDialog((previousState) => {
        return {
          ...previousState,
          value: true,
          message: "Please fill in the title.",
        };
      });
      return;
    } else if (expense.amount.trim().length === 0) {
      setIsFormValid(false);
      setShowDialog((previousState) => {
        return {
          ...previousState,
          value: true,
          message: "Please fill in the amount.",
        };
      });
      return;
    } else if (expense.date.trim().length === 0) {
      setIsFormValid(false);
      setShowDialog((previousState) => {
        return {
          ...previousState,
          value: true,
          message: "Please fill in the date.",
        };
      });
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

  const closeDialogHander = () => {
    setShowDialog((previousState) => {
      return {
        message: "e",
        value: false,
      };
    });
  };

  const saveDialogHander = () => {
    setShowDialog((previousState) => {
      return {
        message: "e",
        value: true,
      };
    });
  };

  console.log(showDialog.value);

  return (
    <div className="flex-wrap h-auto w-full bg-purple-500 my-4 rounded-md px-5 py-5 text-start">
      {showDialog.value ? (
        <DeleteDialog
          message={showDialog.message}
          closeDialogHandler={closeDialogHander}
          saveDialogHander={saveDialogHander}
        ></DeleteDialog>
      ) : (
        <div></div>
      )}

      <form onSubmit={submitForm}>
        <label> Title </label>
        <input
          // style={{ borderColor: "2px solid red" }}
          onChange={titleChangeHandler}
          value={expense.title}
          className={`w-full mb-1 text-lg pl-2 py-1 rounded-sm shadow-sm
          focus:outline-none focus:border-2 focus:border-black focus:rounded-sm
            ${
              isFormValid
                ? "focus:outline-none focus:border-2 focus:border-black"
                : "focus:outline-none focus:border-2 focus:border-red-500"
            }
            // tailwind css based on react variable
          `}
          type="text"
        ></input>
        <label> Price </label>
        <input
          // disabled // to disable the input field

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
        <button
          type="button"
          className="btn bg-red-600 ml-5"
          onClick={cancelHandler}
        >
          {" "}
          Cancel{" "}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
