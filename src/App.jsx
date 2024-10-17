import React from "react";
import { useState, useRef } from "react";
import Form from "./components/Form";
import InputForm from "./components/InputForm";
import "./index.css";

const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [expenses, setExpenses] = useState([]);
  const currentDate = new Date().toISOString().split("T")[0];
  const [inputDate, setInputDate] = useState(currentDate);

  const handleExpenses = () => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { item: inputItem, price: inputPrice, date: inputDate },
    ]);
    setInputItem("");
    setInputPrice("");
    setInputDate(currentDate);
  };

  const handleDelete = (idx) => {
    setExpenses((prevExpenses) => prevExpenses.toSpliced(idx, 1));
  };

  const handleItem = (event) => {
    setInputItem(event.target.value);
  };

  const handlePrice = (event) => {
    setInputPrice(event.target.value);
  };

  const handleDate = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <div className="final">
      <InputForm
        handleItem={handleItem}
        handlePrice={handlePrice}
        handleDate={handleDate}
        handleExpenses={handleExpenses}
        item={inputItem}
        date={inputDate}
        price={inputPrice}
      />

      <Form
        expenses={expenses}
        item={inputItem}
        date={inputDate}
        price={inputPrice}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
