import React from "react";

// Reusable Button component partial codes
const Button = (props) => {
  return (
    <button className="button" type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
