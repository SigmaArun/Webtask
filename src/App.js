
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummy_expenses = [  
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "chennai",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12),locationOfExpenditure:"Ghaziabad" },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure:"Banglore"
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure:" hyderabad"
  },
];

const App =()=> {

  const [expenses, setExpenses] = useState(dummy_expenses);

   const addExpenseHandler = expense=>{
    setExpenses((prevExpenses)=>{ 
        return [expense, ...prevExpenses];
    } );
       
    
   };
  return (
     
      <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items ={expenses}/>  
       
      </div>
      
       
  );
}

export default App;
