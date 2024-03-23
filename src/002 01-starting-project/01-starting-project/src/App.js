
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";
import Cart from  "./components/Cart/Cart";
import React, { useState } from 'react';
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartHandler = () => {
    console.log('clicked cart'); 
    setIsCartOpen((prevState) => !prevState);
  };
  return (
   <CartProvider>
     {isCartOpen && <Cart />}
    <Header onToggleCart={toggleCartHandler}></Header>
    <main>
      <Meals></Meals>
     
    </main>
   </CartProvider>
  );
}

export default App;
