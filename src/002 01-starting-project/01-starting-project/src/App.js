import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsSummery from "./components/Meals/MealsSummery";
import Meals from "./components/Meals/Meals";
import Cart from  "./components/Cart/Cart";

function App() {
  return (
   <Fragment>
    <Cart></Cart>
    <Header></Header>
    <main>
      <Meals></Meals>
     
    </main>
   </Fragment>
  );
}

export default App;
