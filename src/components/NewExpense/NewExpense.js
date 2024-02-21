
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import React,{useState} from "react";
 const NewExpense=(props)=>{

    const [isAddingExpense, setIsAddingExpense] = useState(false);

    const startAddExpenseHandler = () => {
      setIsAddingExpense(true);
    };
  
    const stopAddExpenseHandler = () => {
      setIsAddingExpense(false);
    };

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const obj={
            ...enteredExpenseData,
            id: Math.random().toString()
        };

       // console.log(obj);
       setIsAddingExpense(false);
        props.onAddExpense(obj);
    }

     return(
        <div className="new-expense">
           
           {isAddingExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddExpenseHandler}
        />
      ) : (
        <button onClick={startAddExpenseHandler}>Add Expense</button>
      )}
         </div>
     );
 }
 export default NewExpense;