import classes from "./MealsForm.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";


const MealsForm = ({ mealId, onAddToCart, Meals_Items }) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const cartCtx = useContext(CartContext);

  const amountChangeHandler = (event) => {
    setEnteredAmount(parseInt(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!mealId) {
      console.error("No meal selected.");
      return;
    }
    const selectedMeal = Meals_Items.find((meal) => meal.id === mealId);
    if (!selectedMeal) {
      console.error("Selected meal not found."); 
      return;
    }
    const item = {
      id: selectedMeal.id,
      name: selectedMeal.name,
      amount: enteredAmount,
      price: selectedMeal.price, 
    };

    cartCtx.addItem(item);
    setEnteredAmount("");
    onAddToCart();
  };

  return (
    <form className={classes.form}onSubmit={submitHandler}>
      <div>
        <label>Amount</label>
        <input
          id="amount"
          type="number"
          className={classes.input}
          value={enteredAmount}
          onChange={amountChangeHandler}
        ></input>
      </div>
      <div>
        <button type="submit" className={classes.button}>
          + ADD
        </button>
      </div>
    </form>
  );
};
export default MealsForm;
