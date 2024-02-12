import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  const keyValue=Object.keys(expenses);
  const expenseItems = [];
  for(let i=0;i<keyValue.length;i++)       
  {
        const key=keyValue[i];
        if(key){
          expenseItems.push(
              <ExpenseItem
              id={expenses[key].id}
              title={expenses[key].title}
              amount={expenses[key].amount}
              date={expenses[key].date}
              location={expenses[key].locationOfExpenditure}
            ></ExpenseItem>
          )
        }
  }
  return (
    <div>
      <h2>Lets get started</h2> 
     {expenseItems}
      
    </div>
  );
}

export default App;
