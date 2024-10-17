import React from "react";
import ItemSection from "./ItemSection";
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
            handleDelete={props.handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Form;
