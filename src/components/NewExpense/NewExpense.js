import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

 const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const obj={
            ...enteredExpenseData,
            id: Math.random().toString()
        };

       // console.log(obj);
        props.onAddExpense(obj);
    }

     return(
        <div className="new-expense">
           <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
         </div>
     );
 }
 export default NewExpense;