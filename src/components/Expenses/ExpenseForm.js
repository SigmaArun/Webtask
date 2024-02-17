import React from 'react';
import Card from '../UI/Card';
const ExpenseForm = () => {
  const submitForm = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const date = event.target.date.value;
    const amount = event.target.amount.value;
    const obj = {
    
      date,
      title,
      amount
    };
    localStorage.setItem(obj.date, JSON.stringify(obj));
    console.log(obj)
  };
  return (
    <Card className="expenses">
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="date">Date</label>
        <input type="date" name=" date" id="date"></input>
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title"></input>
        <label htmlFor="amount">Amount</label>
        <input type="number" name=" amount" id="amount"></input>
        <button type="submit">Add Expense</button>
      </form>
    </div>
    </Card>
  );
};

export default ExpenseForm;
