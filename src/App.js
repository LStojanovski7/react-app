import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import expenses from "./data";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler = (expense) => {
    console.log("In ap.js");
    console.log(expense);
  };

  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" />
      </div>
      <div className="App-body">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
