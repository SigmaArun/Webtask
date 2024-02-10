
import './ExpenseItem.css';
function ExpenseItem() {
   const expenseDate= new Date(2024, 2, 10);
   const expenseTitle= 'Car Insruance';
   const expenseAmount=294.67;
   const locationOfExpenditure="chennai ";
    return (
      <div className="expense-item">
       <div> {expenseDate.toISOString()} </div>
       <div className='expense-item_description'> 
       <h2>{expenseTitle} </h2></div>
       <div className='expense-item_description'> <h2>{locationOfExpenditure} </h2></div>
       <div className='expense-item_price'>${expenseAmount}</div>
        
        
      
      </div>
    );
  }
  export default ExpenseItem;
   