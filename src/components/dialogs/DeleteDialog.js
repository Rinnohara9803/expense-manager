import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.closeDialogHandler}
      className="flex fixed top-0 right-0 left-0 bottom-0 bg-opacity-60 bg-gray-600"
    ></div>
  );
};

const DeleteModal = (props) => {
  return (
    <div className="flex fixed top-0 right-0 left-0 bottom-0 bg-opacity-60 justify-center items-center">
      <div className=" bg-white rounded-xl flex-wrap  justify-center items-center w-1/4 overflow-visible fixed ">
        <div className="flex h-10 w-full font-bold text-white bg-red-500 rounded-t-xl items-center text-end">
          <h1 className="text-start px-5">Error Message</h1>
        </div>
        <div className="flex-wrap py-7 text-center">
          <h6 className="">{props.message}</h6>
          <div>
            <button
              onClick={props.closeDialogHandler}
              className=" btn bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const DeleteDialog = ({ message, closeDialogHandler }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeDialogHandler={closeDialogHandler}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <DeleteModal
          message={message}
          closeDialogHandler={closeDialogHandler}
        ></DeleteModal>,
        document.getElementById("delete-dialog")
      )}
    </React.Fragment>
  );
};

export default DeleteDialog;
