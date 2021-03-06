import "./NewExpense.css";

import ExpenseForm from "../ExpenseForm/ExpenseForm";
import expenses from "../../data";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={saveExpenseDataHandler} isDisabled={false} isRequired={true} />
    </div>
  );
};

export default NewExpense;
