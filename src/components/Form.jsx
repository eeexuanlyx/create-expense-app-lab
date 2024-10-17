import React from "react";
import ItemSection from "./ItemSection";
const Form = (props) => {
  return (
    <>
      <div className="inputform">
        {props.expenses.map((expense, idx) => (
          <div className="inputedform">
            <ItemSection
              key={idx}
              item={expense.item}
              price={expense.price}
              date={expense.date}
              handleDelete={props.handleDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
