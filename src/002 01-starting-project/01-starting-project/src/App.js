import { Fragment } from "react";
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";
import Cart from  "./components/Cart/Cart";
import React, { useState } from 'react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };
  return (
   <Fragment>
     {isCartOpen && <Cart />}
    <Header onToggleCart={toggleCartHandler}></Header>
    <main>
      <Meals></Meals>
     
    </main>
   </Fragment>
  );
}

export default App;
