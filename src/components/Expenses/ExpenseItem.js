import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";


import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {  

  const clickHandler=()=>{
    
    console.log('Expense Deleted')
  }


  return (
    <Card className="expense-item">
       
      <ExpenseDate date={props.date} /> 
      
      <ExpenseDetails 
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
       
       <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;
