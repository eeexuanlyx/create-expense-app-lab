import React from "react";

const Input = (props) => {
  return (
    <input
      className="col-md-5"
      type="text"
      placeholder="enter value"
      onChange={props.handle}
      value={props.labelName}
    />
  );
};

export default Input;
