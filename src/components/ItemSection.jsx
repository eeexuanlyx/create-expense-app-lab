import React from "react";
import Label from "./Label";
import Button from "./Button";

const ItemSection = (props) => {
  return (
    <div>
      <Label>Item:{props.item}</Label>
      <Label>Price:{props.price}</Label>
      <Label>Date:{props.date}</Label>
      <Button onClick={props.handleDelete}>Delete</Button>
    </div>
  );
};

export default ItemSection;
