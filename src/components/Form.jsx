import React from "react";
import ItemSection from "./ItemSection";
import Button from "./Button";
const Form = (props) => {
  return (
    <>
      <div className="row">
        {props.expenses.map((expense, idx) => (
          <ItemSection
            key={idx}
            item={expense.item}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </div>
      <Button onClick={props.handleDelete}>Delete</Button>
    </>
  );
};

export default Form;
