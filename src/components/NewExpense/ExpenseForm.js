import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const title = enteredTitle;
    const date = new Date(enteredDate);
    const amount = enteredAmount;

    const obj = {
      date,
      title,
      amount,
    };
    
    localStorage.setItem(obj.date, JSON.stringify(obj));
   // console.log(obj);
   props.onSaveExpenseData(obj);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  /*
    const parentDiv = document.createElement("div");
    const childDiv = document.createElement("div");
    childDiv.innerHTML = `${obj.date} - ${obj.title} - ${"$" + obj.amount}`;
    parentDiv.appendChild(childDiv);

   
    const cardElement = document.querySelector(".expenses");
    cardElement.appendChild(parentDiv);
   */
  
  };
  const cancelForm = () => {
    props.onCancel();
  };
  return (
    
      <form onSubmit={submitForm} >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name=" date"
              id="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name=" amount"
              id="amount"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
         
        </div>
        
        <div className="new-expense__actions">
            <button type="button" onClick={cancelForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    
  );
};

export default ExpenseForm;
