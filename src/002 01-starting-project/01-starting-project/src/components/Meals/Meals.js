import { Fragment } from "react";
import MealsSummery from "./MealsSummery";
import AvilableMeals from "./AvilableMeals";

const Meals=()=>{
    return(
        <Fragment>
            <MealsSummery></MealsSummery>
            <AvilableMeals></AvilableMeals>
        </Fragment>
    );
}
export default Meals;