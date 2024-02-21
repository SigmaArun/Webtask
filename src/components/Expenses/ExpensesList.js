import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

  let expensesContent = <p>No Expenses found.</p>;
  if(props.items.length===0){
    return <h2 className="expenses-list__fallback">Found no Expenses </h2>
  }

  if (props.items.length === 1) {
    let extraMessage = <h2 className="expenses-list__fallback">Only one expense please add more !!</h2>;

    expensesContent = (
      <div>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {extraMessage}
      </div>
    );
  } else if (props.items.length > 1) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <ul className="expenses-list">
        {expensesContent}

    </ul>
  )
};
export default ExpensesList;
