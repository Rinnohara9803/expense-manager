import ExpenseDate from "../expenses/ExpenseDate";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpenseItem = ({ id, title, amount, date, deleteExpenseHandler }) => {
  const notifyDeletion = () => {
    deleteExpenseHandler(id).then(() => {
      toast("Expense deleted successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  const notifyEdit = () =>
    toast("Expense edited successfully.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  let TheToast = <ToastContainer />;
  return (
    <div className="relative bg-zinc-700 px-2 py-2 mb-10 mx-2 my-2 rounded-lg">
      {TheToast}
      <div
        className="absolute px-2 py-2 bg-slate-200 rounded-md -top-5 right-5  hover:bg-slate-400"
        onClick={notifyDeletion}
      >
        <DeleteIcon sx={{ color: "red" }} />
      </div>
      <div
        className="hidden absolute px-2 py-2 bg-slate-200 rounded-md -top-5 right-[70px]  hover:bg-slate-400"
        onClick={notifyEdit}
      >
        <EditIcon color="primary" />
      </div>
      <div className="flex  justify-between items-center">
        <div className="flex-wrap sm:flex sm:space-x-2  items-center">
          <ExpenseDate date={date}></ExpenseDate>
          <p className="text-white h-auto w-auto font-bold text-ellipsis flex">
            {title}
          </p>
        </div>
        <div className=" flex h-auto font-bold px-2 border-solid border-2 bg-purple-700 rounded-xl text-white">
          ${amount}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
