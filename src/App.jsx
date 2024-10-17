import React from "react";
import { useState, useRef } from "react";
import Form from "./components/Form";
import InputForm from "./components/InputForm";
import "./index.css";

const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleExpenses = () => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { item: inputItem, price: inputPrice, date: inputDate },
    ]);
    setInputItem("");
    setInputPrice("");
    setInputDate("");
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
    <>
      <h2>Input Form</h2>
      <InputForm
        handleItem={handleItem}
        handlePrice={handlePrice}
        handleDate={handleDate}
        handleExpenses={handleExpenses}
        item={inputItem}
        date={inputDate}
        price={inputPrice}
      />
      <h2>Form</h2>
      <Form
        expenses={expenses}
        item={inputItem}
        date={inputDate}
        price={inputPrice}
      />
    </>
  );
};

export default App;
