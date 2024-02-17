
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/Expenses/ExpenseForm"

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
 
  return (
     
      <div>
      <h2>Lets get started</h2> 
        <Expenses expenses ={expenses} />
        <div> <ExpenseForm></ExpenseForm></div>
        
      </div>
      
       
  );
}

export default App;
