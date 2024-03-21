import classes from "./AvilableMeals.module.css";
import Card from "../UI/Card";
import MealsForm from "./MealsForm";
const Meals_Items = [
  {
    id: "1",
    name: "AALOO paratha",
    description: "Best paratha with huge butter Loaded",
    price: 100.0,
  },
  {
    id: "2",
    name: "Fish Curry",
    description: "Best and Fresh fish from Arabaian sea with veggies",
    price: 500.0,
  },
  {
    id: "3",
    name: "Idley Dosha",
    description: "Best taste of south indian dosha ",
    price: 100.0,
  },
  {
    id: "4",
    name: "Veggy King Burger ",
    description: "King Burger with sauce ",
    price: 100.0,
  },
  {
    id: "5",
    name: "vada Pao",
    description: "maharastrian vada pao with lovely taste",
    price: 100.0,
  },
];
const AvilableMeals = () => {
  const mealsList = Meals_Items.map((meal) => (
    <div key={meal.id} className={classes.outer}>
      <div className={classes.mealDetails}>
        <div className={classes.category1}>{meal.name}</div>
        <div className={classes.category2}>{meal.description}</div>
        <div className={classes.category3}> ₹ {meal.price}</div>
      </div>
      <div className={classes.formContainer}>
        <MealsForm></MealsForm>
      </div>
    </div>
  ));
  return (
    <div className={classes.centered}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};
export default AvilableMeals;
