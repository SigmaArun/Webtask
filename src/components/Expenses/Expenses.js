import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

const Expenses=(props)=>{
   
  const [filteredYear,setFilteredYear]= useState('2020');

   const filteredChangeHandler= selectedYear=>{
    setFilteredYear(selectedYear);
   };
    
    
    const keyValue=Object.keys(props.expenses);
    const expenseItems = [];
    for(let i=0;i<keyValue.length;i++)       
    {
          const key=keyValue[i];
          const expenseYear = props.expenses[key].date.getFullYear().toString();
          if(key && expenseYear === filteredYear){
            expenseItems.push(
            
                <ExpenseItem
                key={key}  
                id={props.expenses[key].id}
                title={props.expenses[key].title}
                amount={props.expenses[key].amount}
                date={props.expenses[key].date}
                location={props.expenses[key].locationOfExpenditure}
              ></ExpenseItem>
             
            )
          }
          
    }
    return (
    
       
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>
        
              {expenseItems}
          
        </Card>
      
      
      
    );

}
export default Expenses;