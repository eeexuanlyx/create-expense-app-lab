import React from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const InputForm = (props) => {
  return (
    <div className="row">
      <div>
        <Label>Item</Label>
        <Input handle={props.handleItem} labelName={props.item} />
      </div>
      <div>
        <Label>Price</Label>
        <Input handle={props.handlePrice} labelName={props.price} />
      </div>
      <div>
        <Label>Date</Label>
        <Input handle={props.handleDate} labelName={props.date} />
      </div>
      <Button onClick={props.handleExpenses}>Submit</Button>
    </div>
  );
};

export default InputForm;

//<input className={props.className} id="item" type="text" ref={itemInputRef} />
