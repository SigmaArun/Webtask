import React ,{useContext}from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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




const PrivateRoute = ({ component: Component, ...rest }) => {
  const authCtx = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        authCtx.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};


const App = () => {
 const authCtx= useContext(AuthContext);
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Container fluid className="p-0">
              <Header />
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />

                <Route path="/store/products/:productId" component={ProductDetails} />
                 
                <PrivateRoute path="/store" exact component={Store} />
                                

                <Route path="/contact" component={Contact} />
                <Route path="/signup" component={SignUpForm} />
                <Route path="/login" component={LoginForm} />
                
                <PrivateRoute path="/profile" component={ProfileForm} />
                <Redirect exact from="/" to="/home" />
                <Route path="*" render={() => <Redirect to="/" />} />
              </Switch>
              <Footer />
              <Cart />
            </Container>
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;
