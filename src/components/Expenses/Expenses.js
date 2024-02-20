import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses=(props)=>{
    
    
    const keyValue=Object.keys(props.expenses);
    const expenseItems = [];
    for(let i=0;i<keyValue.length;i++)       
    {
          const key=keyValue[i];
          if(key){
            expenseItems.push(
                <ExpenseItem
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
        
              {expenseItems}
        </Card>
      
      
      
    );

}
export default Expenses;