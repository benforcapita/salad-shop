import React from 'react';
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import * as types from '../../Types'
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

const Cart: React.FC = () => {

  const cartItems = useSelector((state: types.StoreType) => state.Items)
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No Items in cart</p> : null}
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          index={index}
        />
      ))}
      {cartItems.length === 0 ? undefined :<Link to="/checkout" onClick={()=>{dispatch(actions.close())}}>Proceed to Checkout</Link>}
  </Wrapper>)
}
  

export default Cart;
