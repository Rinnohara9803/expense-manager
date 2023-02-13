import React from "react";

const DeleteDialog = ({ message, closeDialogHandler, saveDialogHandler }) => {
  return (
    <div className="flex fixed top-0 right-0 left-0 bottom-0 bg-opacity-60 bg-purple-500 justify-center items-center">
      <div className=" bg-white rounded-xl flex-wrap  justify-center items-center w-1/4">
        <div className="flex h-10 w-full font-bold text-white bg-red-500 rounded-t-xl items-center text-end">
          <h1 className="text-start px-5">Error Message</h1>
        </div>
        <div className="flex-wrap py-7 text-center">
          <h6 className="">{message}</h6>
          <div>
            <button onClick={closeDialogHandler} className=" btn bg-red-600">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
