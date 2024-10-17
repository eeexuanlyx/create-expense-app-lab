import React from "react";
import ItemSection from "./ItemSection";

const Form = (props) => {
  return (
    <div>
      {props.expenses.map((expense, idx) => (
        <ItemSection
          item={expense.item}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Form;
