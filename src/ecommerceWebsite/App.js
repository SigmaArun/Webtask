import { Route, Routes, Navigate } from "react-router-dom";
import React, { useContext } from "react";

import Cart from "./components/Cart";
import CartProvider from "./components/store/CartProvider";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { Container } from "react-bootstrap";
import SignUpForm from "./components/pages/SignUpForm";
import LoginForm from "./components/pages/LoginForm";
import ProductDetails from "./components/pages/ProductsDetails";
import AuthProvider from "./components/store/AuthProvider";
import ProfileForm from "./components/pages/ProfileForm";
import AuthContext from "./components/store/AuthContext";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Container fluid className="p-0">
            <Header></Header>

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/store" exact element={<Store />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/store/products/:productId"
                element={<ProductDetails />}
              />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />

              <Route
                path="/profile"
                element={
                  authCtx.isLoggedIn ? (
                    <ProfileForm />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer></Footer>
            <Cart />
          </Container>
        </CartProvider>
      </AuthProvider>
    </>
  );
};
export default App;
