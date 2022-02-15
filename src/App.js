import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import data from "./data";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { FaInfo } from "react-icons/fa";

function App() {
  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      toast.success(
        <h3>
          <FaInfo /> New expense added
        </h3>
      );
      return [expense, ...prevExpenses];
    });
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
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} pauseOnHover />
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
