import React, { useState } from 'react';
import Card from '../UI/Card';
const ExpenseForm = () => {

  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredAmount,setEnteredAmount]=useState('');
  const [enteredDate,setEnteredDate]=useState('');

   const titleChangeHandler=(event)=>{
     setEnteredTitle(event.target.value);
   };
   const amountChangeHandler=(event)=>{
     setEnteredAmount(event.target.value)
   };
   const dateChangeHandler=(event)=>{
   setEnteredDate(event.target.value)
   };
   
   const submitForm = (event) => {
    event.preventDefault();
    const title = enteredTitle;
    const date = enteredDate;
    const amount = enteredAmount;
    
    const obj = {
    
      date,
      title,
      amount
    };
    localStorage.setItem(obj.date, JSON.stringify(obj));
    console.log(obj)  

    const parentDiv= document.createElement('div');
    const childDiv= document.createElement('div');
    childDiv.innerHTML=`${obj.date} - ${obj.title} - ${'$'+obj.amount}`;
    parentDiv.appendChild(childDiv);
    
   
    // Note Line : by this below line  code i was able to show on screen but i wanted to add in card  
   // document.body.appendChild(parentDiv);

     // i like to add in Card compnent itself beacuse i like this 
     const cardElement = document.querySelector('.expenses');
     cardElement.appendChild(parentDiv);
   // <Card className="expenses">
   //   parentDiv
   // </Card>

    
  };  
  return (
    <Card className="expenses">
    <div>
      <form  onSubmit={submitForm}>
        <label htmlFor="date">Date</label>
        <input type="date" name=" date" id="date" onChange={dateChangeHandler}></input>
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title" onChange={titleChangeHandler}></input>
        <label htmlFor="amount">Amount</label>
        <input type="number" name=" amount" id="amount" onChange={amountChangeHandler}></input>
        <button type="submit">Add Expense</button>
      </form>
    </div>
   
    </Card>
  );
};

export default ExpenseForm;
