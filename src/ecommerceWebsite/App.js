

import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import CartProvider from "./components/store/CartProvider";

const App = () => {
  return (
    <>
    
      <CartProvider>
        <HomePage></HomePage>
        <Cart></Cart>
      </CartProvider>
    </>
  );
};
export default App;
