
import { BrowserRouter as Router, Route } from "react-router-dom";
import IngredientsPage from "./components/Pages/IngredientsPage/IngredientsPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import { Wrapper } from "./App.styles";



const App = () => {
  return (
    <Wrapper>
      <Router>
      <CartDrawer/>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={IngredientsPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Router>
    </Wrapper>
  );
}

export default App;
