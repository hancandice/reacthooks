import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr. ");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

export default App;
