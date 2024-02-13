import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";


import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
       
      <ExpenseDate date={props.date} />
      
      <ExpenseDetails 
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
    
    </Card>
  );
}
export default ExpenseItem;
