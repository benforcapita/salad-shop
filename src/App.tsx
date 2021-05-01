import { createContext,useReducer,useState } from 'react';
import IngredientsPage from "./components/IngredientsPage/IngredientsPage";
import CartDrawer from "./components/Cart/CartDrawer";




const App = () => {
  return (
        <div className="App">
        <IngredientsPage />
          <CartDrawer/> 
          </div>
  );
}

export default App;
