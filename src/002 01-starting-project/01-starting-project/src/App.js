import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsSummery from "./components/Meals/MealsSummery";
import Meals from "./components/Meals/Meals";

function App() {
  return (
   <Fragment>
    <Header></Header>
    <main>
      <Meals></Meals>
     
    </main>
   </Fragment>
  );
}

export default App;
