import React, { useState, useRef } from "react";
import DeleteDialog from "../dialogs/DeleteDialog";
import Input from "../ui/inputs/Input";

// const formValidationReducer = (state, action) => {
//   console.log(action.value);
//   if (action.type === "USER_TITLE_INPUT") {
//     return { isFormValid: action.value.trim().length === 0 };
//   }
//   return { isFormValid: state.isFormValid };
// };

const ExpenseForm = ({ saveExpenseHandler, setEditingHandlerToFalse }) => {
  // const [formValidationState, dispatchFormValidation] = useReducer(
  //   formValidationReducer,
  //   { isFormValid: true }
  // );

  // const titleChangeHandler = (event) => {
  //   dispatchFormValidation({
  //     type: "USER_TITLE_INPUT",
  //     value: event.target.value,
  //   });
  // };

  const [showDialog, setShowDialog] = useState({
    message: "e",
    value: false,
  });

  const titleRef = useRef();
  const amountRef = useRef();

  const [expense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setNewExpense((previousState) => {
      return { ...previousState, title: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setNewExpense((previousState) => {
      return { ...previousState, amount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setNewExpense((previousState) => {
      return { ...previousState, date: e.target.value };
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
      setShowDialog((previousState) => {
        return {
          ...previousState,
          value: true,
          message: "Please fill in the form.",
        };
      });
      return;
    } else if (expense.title.trim().length === 0) {
      // setShowDialog((previousState) => {
      //   return {
      //     ...previousState,
      //     value: true,
      //     message: "Please fill in the title.",
      //   };
      // });
      titleRef.current.focus();
      return;
    } else if (expense.amount.trim().length === 0) {
      // setShowDialog((previousState) => {
      //   return {
      //     ...previousState,
      //     value: true,
      //     message: "Please fill in the amount.",
      //   };
      // });
      amountRef.current.focus();
      return;
    } else if (expense.date.trim().length === 0) {
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
    console.log("close");
  };

  return (
    <div className="flex-wrap h-auto w-full bg-purple-500 my-4 rounded-md px-5 py-5 text-start">
      {showDialog.value && (
        <DeleteDialog
          message={showDialog.message}
          closeDialogHandler={closeDialogHander}
        ></DeleteDialog>
      )}

      <form onSubmit={submitForm}>
        <Input
          ref={titleRef}
          label="Title"
          value={expense.title}
          type="text"
          valueChangeHandler={titleChangeHandler}
        ></Input>
        <Input
          ref={amountRef}
          label="Amount"
          value={expense.amount}
          type="number"
          valueChangeHandler={amountChangeHandler}
        ></Input>
        <label> Date </label>
        <input
          value={expense.date}
          onChange={dateChangeHandler}
          className="w-full rounded-sm mb-1 text-lg pl-2 py-1"
          type="date"
          min="2019-01-01"
          max="2023-12-31"
        ></input>
        <button type="submit" className="btn">
          Add Expenses
        </button>
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
