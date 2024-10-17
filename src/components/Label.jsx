import React from "react";

const Label = (props) => {
  return <label htmlFor={props.children}>{props.children}</label>;
};

export default Label;
