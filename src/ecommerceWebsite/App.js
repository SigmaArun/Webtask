import { Route, Routes } from "react-router-dom";


import Cart from "./components/Cart";
import CartProvider from "./components/store/CartProvider";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './components/pages/Home';
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <> 
      <CartProvider>
        <Container fluid className="p-0">
        <Header></Header>
       
        <Routes>
         
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          
        </Routes>
       <Footer></Footer>
        <Cart />
        </Container>
      </CartProvider>
    </>
  );
};
export default App;
