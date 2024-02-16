import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount ,setAmount]=useState(props.amount);

  const clickHandler = () => {
    setTitle("updated!");
    
    console.log(title);
  };

  const amountHandler=()=>{
    setAmount('100');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        title={title}
        location={props.location}
        amount={amount}
      />
      <button onClick={amountHandler}>ADD Amount</button>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
