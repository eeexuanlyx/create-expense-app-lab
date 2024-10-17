import React from "react";
import Label from "./Label";
import Button from "./Button";

const ItemSection = (props) => {
  return (
    <div>
      <Label>{props.item}</Label>
      <Label>{props.price}</Label>
      <Label>{props.date}</Label>
      <Button onClick={props.handleDelete}>Delete</Button>
    </div>
  );
};

export default ItemSection;
