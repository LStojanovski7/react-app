import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { isDisabled, isRequired } = props;
  //amount
  const min = 0.01;
  const step = 0.01;

  //date
  const minDate = "2022-01-01";

  //states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //handlers
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder="Product name"
            required={isRequired}
            disabled={isDisabled}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min={min}
            step={step}
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder="$20"
            required={isRequired}
            disabled={isDisabled}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min={minDate} value={enteredDate} onChange={dateChangeHandler} required={isRequired} disabled={isDisabled} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
