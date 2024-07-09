import React, { useContext, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

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

import AuthContext from "./components/store/AuthContext";

const Cart = lazy(() => import("./components/Cart"));
const ProfileForm = lazy(() => import("./components/pages/ProfileForm"));

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authCtx = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authCtx.isLoggedIn ? <Component {...props} /> : <Redirect to="/Webtask/login" />
      }
    />
  );
};

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Container fluid className="p-0">
              <Header />
              <Switch>
              <Redirect exact from="/Webtask" to="/Webtask/home" />
              <Route exact path="/Webtask/home" component={Home} />
                <Route path="/Webtask/about" component={About} />
                <Route path="/Webtask/store/products/:productId" component={ProductDetails} />
                <PrivateRoute path="/Webtask/store" exact component={Store} />
                <Route path="/Webtask/contact" component={Contact} />
                <Route path="/Webtask/signup" component={SignUpForm} />
                <Route path="/Webtask/login" component={LoginForm} />
                <Suspense fallback={<p>Loading...</p>}>
                  <PrivateRoute path="/Webtask/cart" component={Cart} />
                  <PrivateRoute path="/Webtask/profile" component={ProfileForm} />
                </Suspense>
               
                <Route render={() => <Redirect to="/Webtask/home" />} />
              </Switch>
              <Footer />
            </Container>
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;
