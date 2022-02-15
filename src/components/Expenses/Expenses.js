// components
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
// UI
import Card from "../UI/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Expense.css";

function Expenses(props) {
  const filterChangeHandler = (event) => {};
  const { items } = props;

  return (
    <div className="expenses">
      <Card>
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        {items.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
