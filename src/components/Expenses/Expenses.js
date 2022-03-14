// components
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
// UI
import Card from "../UI/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Expense.css";
import { useEffect, useState } from "react";

function Expenses(props) {
  const { items } = props;

  const [itemRows, setItems] = useState(items);

  const filterChangeHandler = (filter) => {
    if (filter.date !== "all") {
      const date = new Date(filter.date);
      const expenses = items.filter((item) => item.date.getFullYear() === date.getFullYear());
      setItems(expenses);
    } else {
      setItems(items);
    }
  };

  useEffect(() => {
    setItems(items);
  }, [items]);

  return (
    <div className="expenses">
      <Card>
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        {itemRows.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
