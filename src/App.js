
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const App =()=> {
  const expenses = [  
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
  const [initialexpenses, setExpenses] = useState(expenses);

   const addExpenseHandler = expense=>{
    setExpenses((prevExpenses) => [...prevExpenses,expense]);
       
    
   }
  return (
     
      <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses ={initialexpenses}/> 
       
      </div>
      
       
  );
}

export default App;
