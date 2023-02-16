import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <React.Fragment>
      <label> {props.label} </label>
      <input
        ref={inputRef}
        value={props.value}
        onChange={props.valueChangeHandler}
        className="w-full rounded-sm mb-1 text-lg pl-2 py-1"
        // shadow-sm focus:outline-none focus:border-2 focus:border-black focus:rounded-sm"
        type={props.type}
      ></input>
    </React.Fragment>
  );
});

export default Input;
